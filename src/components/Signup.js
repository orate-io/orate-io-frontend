/**
 * @file Signup component, user can enter their info into the fields and the component will then add their account to the database using
 * a post request.
 * @author Yacine Saoudi
 */
import React from 'react'
import userService from '../services/userService'

const Signup = () => {
  /**.
   * @method handleSubmit - takes data from the forms, cretes an obejct with it, then directly makes a signup request using the user
   * service.
   *
   * @param event used to prevent the default action on button press; stops the page from refreshing too soon.
   */
  const handleSubmit = async (event) => {

    event.preventDefault()

    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    const passwordResub = event.target.passwordResub.value

    event.target.username.value = ''
    event.target.email.value = ''
    event.target.password.value = ''
    event.target.passwordResub.value = ''

    if (password !== passwordResub){
      console.log('YOUR PASSWORDS DO NOT MATCH')
    }
    else {
      const signupObj = {
        username: username,
        email: email,
        password: password
      }
      await userService.signupReq(signupObj)
    }

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
