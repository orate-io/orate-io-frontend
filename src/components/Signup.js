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

    if (password === passwordRetype){
      const signupObj = {
        username: username,
        email: email,
        password: password
      }
      await userService.signupReq(signupObj)
      history.push('/login')
    }

  }
  return (
    <ClientSignup handleSubmit={handleSubmit}/>
  )
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default Signup
