import axios from 'axios'

// const baseUrl = 'http://localhost:3001/'

const loginReq = async (loginObject) => {
  console.log(loginObject)
  const response = await axios.post('http://localhost:3001/login', loginObject)
  console.log(response.data)
  return loginObject
}

const signupReq = async (signupObject) => {
  console.log(signupObject)
  const response = await axios.post('http://localhost:3001/signup', signupObject)
  console.log(response.data)
  return response.data
}

export default { loginReq, signupReq }