/**
 * @file The login component which hanldes logic of loging in and wraps the
 * client front end code. Handles logging in using username and password.
 */
import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../reducers/loginReducer'
import ClientLogin from './Client/ClientLogin'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const getUser = useSelector(state => state.login)
  let history = useHistory()
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

    const newObj = {
      username: username,
      password: password
    }
    dispatch(login(newObj, remember))

    if(getUser.error){
      alert('username or password incorrect')
    }
    else{
      history.push('/videos')
    }
  }

  /**
   * Sends a logout dispatch to the action creator.
   */
  const logoutHandler = async () => {
    dispatch(logout('empty'))
    history.push('/')
  }

  /* renders a logout button if logged in, login form if otherwise */
  let loggedIn = window.localStorage.getItem('loggedUser')
  if (loggedIn && (getUser!==null)){
    return(
      <div>
        <button type="submit" onClick={logoutHandler} > Logout </button>
      </div>
    )
  }
  else {
    return (
      <ClientLogin handleSubmit={handleSubmit}/>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Login)
