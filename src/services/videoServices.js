/**
 * @file UserService contains all the http requests to the backend.
 */
import axios from 'axios'
const baseUrl = 'http://localhost:3000/'

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
  const response = await axios.post(`${baseUrl}video`, vidObj, config)
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

