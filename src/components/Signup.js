import React from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../reducers/accountReducer'

const Signup = () => {
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    const passwordResub = event.target.passwordResub.value

    if (password !== passwordResub){
      console.log('YOUR PASSWORDS DO NOT MATCH')
    }

    const signupObj = {
      username: username,
      email: email,
      password: password
    }
    console.log(signupObj)
    dispatch(signup(signupObj))

    // dispatch(login(event))
  }
  return(
    <form onSubmit={handleSubmit} >
      <div>
        username:
        <input
          type = 'text'
          name = 'username'
          onChange = {({ target }) => {
            console.log(target.value)
          }}
        />
      </div>
      <div>
        email:
        <input
          type = 'text'
          name = 'email'
          onChange = {({ target }) => {
            console.log(target.value)
          }}
        />
      </div>
      <div>
        password:
        <input
          type = 'password'
          name = 'password'
          onChange = {({ target }) => {
            console.log(target.value)
          }}
        />
      </div>
      <div>
        password resubmit:
        <input
          type = 'password'
          name = 'passwordResub'
          onChange = {({ target }) => {
            console.log(target.value)
          }}
        />
      </div>
      <button type = "submit">sign up</button>
    </form>
  )
}

export default Signup
