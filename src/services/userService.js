/**
 * @file UserService contains all the http requests to the backend.
 */
import axios from 'axios'
const baseUrl = (window.env && window.env.URL)
  ? window.env.URL
  : 'http://localhost:3001/'


const verifyToken = (token) => {
  const response = axios.post(`${baseUrl}login/verify`, { token: token })
  return response.data
}

/**
 * Sets token in local storage or deletes it.
 *
 * @function
 * @param {object} newToken Sets the local storage as the given new token, deletes if new token is null.
 * @param {boolean} remember Boolean representing whether the state should be stored in local storage.
 */
const setToken = (newToken, remember) => {
  let token = null
  if (newToken) {
    token = `Bearer ${newToken}`
    if (remember) {
      window.localStorage.setItem(
        'loggedUser', token
      )
    }
  }
  else {
    window.localStorage.removeItem('loggedUser')
  }
}

/**
 * Post request to login url.
 *
 * @function
 * @param {object} loginObject Username and password that user input.
 * @returns {object} LoginObject.
 */
const loginReq = (loginObject) => {
  return axios.post(`${baseUrl}login`, loginObject)
    .then((response) => response.data)
    .catch(() => undefined)
}

/**
 * Post request to signup url.
 *
 * @function
 * @param {object} signupObject Username, password, and email that user input.
 * @returns {object} LoginObject.
 */
const signupReq = async (signupObject) => {
  return axios.post(`${baseUrl}signup`, signupObject)
    .then(response => response)
    .catch(() => undefined)
}

export default { loginReq, signupReq, setToken, verifyToken }
