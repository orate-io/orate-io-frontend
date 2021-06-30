/**
 * @file UserService contains all the http requests to the backend.
 */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

// eslint-disable-next-line no-unused-vars
let token = null

const setToken = (newToken) => {
  if (newToken){
    token = `bearer ${newToken}`
  }
  else {
    token = null
  }
}

/**
 * Post request to login url.
 *
 * @function
 * @param {object} loginObject - Username and password that user input.
 * @returns {object} LoginObject.
 */
const loginReq = async (loginObject) => {
  const response = await axios.post(`${baseUrl}login`, loginObject)
  return response.data
}
/**
 * Post request to signup url.
 *
 * @function
 * @param {object} signupObject - Username, password, and email that user input.
 * @returns {object} LoginObject.
 */
const signupReq = async (signupObject) => {
  const response = await axios.post(`${baseUrl}signup`, signupObject)
  return response.data
}

export default { loginReq, signupReq, setToken }
