/**
 * @file UserService contains all the http requests to the backend.
 */
import axios from 'axios'

const baseUrl = (window.env && window.env.URL)
  ? window.env.URL
  : 'http://localhost:3001/'

/**
 * Post request to /video url. Sends video in DataForm format.
 *
 * @function
 * @param {object} vidObj Video object the user provided.
 * @returns {object} Response from backend.
 */
const createVid = async (vidObj) => {
  const token = window.localStorage.getItem('loggedUser')
  const config = {
    headers: { Authorization: token }
  }

  /* Get upload URL from the backend */
  const preUploadResponse = await axios.get(`${baseUrl}s3Url`, config)
  const url = preUploadResponse.data.url
  const videoId = preUploadResponse.data.videoId

  /* Upload the file to S3 */
  try {
    await axios.put(url, vidObj)
  } catch (error) {
    return error.response
  }

  /* Update the backend with the new s3 data */
  const postBody = {
    url: url.split('?')[0],
    name: vidObj.name,
    id: videoId
  }

  console.log('pre post')

  const response = await axios.post(`${baseUrl}video`, postBody, config)
  console.log('post post')
  console.log(response)

  return response
}

/**
 * Get request to /video URL.
 *
 * @function
 * @returns {object} VidList object that contains list of all videos.
 */
const getAll = async () => {
  const token = window.localStorage.getItem('loggedUser')
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(`${baseUrl}video`, config)
  return response
}

export default { createVid, getAll }

