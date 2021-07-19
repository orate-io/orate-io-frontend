/**
 * @file UserService contains all the http requests to the backend.
 */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/video'

const createVid = async (vidObj) => {
  const token = window.localStorage.getItem('loggedUser')
  console.log(token)
  const config = {
    headers: { Authorization: token }
  }
  console.log(config.headers)
  const response = await axios.post(baseUrl, vidObj, config)
  console.log(response)
}

const getAll = async () => {
  const token = window.localStorage.getItem('loggedUser')
  console.log(token)
  const config = {
    headers: { Authorization: token }
  }
  const vidList = await axios.get(baseUrl, config)
  return vidList
}

export default { createVid, getAll }

