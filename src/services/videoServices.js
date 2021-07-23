/**
 * @file UserService contains all the http requests to the backend.
 */
import axios from 'axios'
const baseUrl = window.env
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
  const getLinkResponse = await axios.get('/s3Url', config)
  const url = getLinkResponse.data.url
  const awsResponse = await axios.put(url, vidObj)
  /* TODO: Add check that awsResponse is success */
  const videoUrl = url.split('?')[0]
  const response = await axios.post(`${baseUrl}video`, videoUrl, config)
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
  const vidList = await axios.get(`${baseUrl}video`, config)
  return vidList
}

export default { createVid, getAll }

