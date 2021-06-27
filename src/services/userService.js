/**
 * @file UserService contains all the http requests to the backend.
 * @author Yacine Saoudi
 */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

/**
 * Post request to login url.
 *
 * @function
 * @param {object} loginObject - Username and password that user input.
 * @returns {object} LoginObject.
 */
const loginReq = async (loginObject) => {
  console.log(loginObject)
  const response = await axios.post(`${baseUrl}login`, loginObject)
  console.log(response.data)
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
  console.log(response.data)
  return response.data
}

export default { loginReq, signupReq, setToken }
