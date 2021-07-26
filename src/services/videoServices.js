/**
 * @file UserService contains all the http requests to the backend.
 */
import axios from 'axios'
import env from 'react-dotenv'
const baseUrl = env.URL

const createVid = async (vidObj) => {
  const token = window.localStorage.getItem('loggedUser')
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(`${baseUrl}video`, vidObj, config)
  return response
}

const getAll = async () => {
  const token = window.localStorage.getItem('loggedUser')
  const config = {
    headers: { Authorization: token }
  }
  const vidList = await axios.get(`${baseUrl}video`, config)
  return vidList
}

export default { createVid, getAll }

