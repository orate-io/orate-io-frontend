import axios from 'axios'

// const baseUrl = 'http://localhost:3001/'

/**
 * Post request to login url.
 *
 * @function
 * @param {object} loginObject - Username and password that user input.
 * @returns {object} LoginObject.
 */
const loginReq = async (loginObject) => {
  console.log(loginObject)
  const response = await axios.post('http://localhost:3001/login', loginObject)
  console.log(response.data)
  return loginObject
}
/**
 * Post request to signup url.
 *
 * @function
 * @param {object} signupObject - Username, password, and email that user input.
 * @returns {object} LoginObject.
 */
const signupReq = async (signupObject) => {
  const response = await axios.post('http://localhost:3001/signup', signupObject)
  console.log(response.data)
  return response.data
}

export default { loginReq, signupReq }
