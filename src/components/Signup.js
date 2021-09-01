/**
 * @file Signup component, user can enter their info into the fields and the component will then add their account to the database using
 * a post request.
 */
import React from 'react'
import userService from '../services/userService'

const Signup = () => {
  /**
   * Takes data from the forms, cretes an obejct with it, then directly makes a signup request using the user
   * service.
   *
   * @param {object} event Used to prevent the default action on button press; stops the page from refreshing too soon.
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
      /* palceholder */
      console.log('PASSWORDS DONT MATCH')
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
  return (
    <form onSubmit={handleSubmit} >
      <div>
        username:
        <input type = 'text' name = 'username' />
      </div>
      <div>
        email:
        <input type = 'text' name = 'email' />
      </div>
      <div>
        password:
        <input type = 'password' name = 'password' />
      </div>
      <div>
        password resubmit:
        <input type = 'password' name = 'passwordResub' />
      </div>
      <button type = "submit">sign up</button>
    </form>
  )
}

export default Signup
