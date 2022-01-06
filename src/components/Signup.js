/**
 * @file The signup component which hanldes logic of siging up and wraps the
 * client front end code. Handles signup with email, username and password.
 */
import React from 'react'
import userService from '../services/userService'
import ClientSignup from './Client/ClientSignup'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
const Signup = () => {
  let history = useHistory()
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
    const passwordRetype = event.target.passwordRetype.value

    event.target.username.value = ''
    event.target.email.value = ''
    event.target.password.value = ''
    event.target.passwordRetype.value = ''

<<<<<<< HEAD
    if (password === passwordRetype){
=======
    if (password !== passwordResub){
      /* palceholder */
      alert('Passwords do not match! Please try again.')
      // event.target.isValid.value = 'Password doesnt match'
    }
    else {
      // event.target.isValid.value = 'pass matches!'
>>>>>>> 8a1af75 (Video uploading, and error handling)
      const signupObj = {
        username: username,
        email: email,
        password: password
      }
<<<<<<< HEAD
      await userService.signupReq(signupObj)
      history.push('/login')
=======
      const res = await userService.signupReq(signupObj)
      if(res){
        alert('account succesfully created')
      }
      else{
        alert('account not created, username or email may already be in use')
      }

>>>>>>> 8a1af75 (Video uploading, and error handling)
    }

  }
  return (
<<<<<<< HEAD
    <ClientSignup handleSubmit={handleSubmit}/>
=======
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
      {/* <textarea type = 'text' name = 'isValid' /> */}
      <div>
        password resubmit:
        <input type = 'password' name = 'passwordResub' />
      </div>
      <button type = "submit">sign up</button>
    </form>
>>>>>>> 8a1af75 (Video uploading, and error handling)
  )
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default Signup
