/**
 * @file The login component which hanldes logic of loging in and wraps the
 * client front end code. Handles logging in using username and password.
 */
import React  from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/loginReducer'
import ClientLogin from './Client/ClientLogin'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import userService from '../services/userService'

const Login = ({ history }) => {
  const dispatch = useDispatch()
  /**
   * Takes data from the forms, cretes an obejct with it, then sends it to the login reducer to make a request.
   *
   * @param {object} event Prevents page from refreshing prematurely.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    const remember = event.target.remember.checked

    event.target.username.value = ''
    event.target.password.value = ''

    const userCreds = {
      username: username,
      password: password
    }

    try {
      const loginResponse = await userService.loginReq(userCreds)
      await dispatch(login(loginResponse, remember))
      history.push('/')
    } catch (error) {
      /* User credentials incorrect */
    }
  }
  return (
    <ClientLogin handleSubmit={handleSubmit}/>
  )
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Login)
