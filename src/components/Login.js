import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/loginReducer'
const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    const newObj = {
      username: username,
      password: password
    }
    dispatch(login(newObj))
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
          username:
        <input
          type = 'text'
          name = 'username'
        />
      </div>
      <div>
          password:
        <input
          type = 'password'
          name = 'password'
        />
      </div>
      <button type = "submit">submit</button>
    </form>
  )
}

export default Login
