/**
 * @file Login component, takes data from form when submitted and sends a dispatch to the login reducer, then sets local storage
 * to the token.
 */
import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../reducers/loginReducer'

const Login = () => {
  const dispatch = useDispatch()
  const getUser = useSelector(state => state.login)

  /**
   * Takes data from the forms, cretes an obejct with it, then sends it to the login reducer to make a request.
   *
   * @param {object} event Prevents page from refreshing prematurely.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    event.target.username.value = ''
    event.target.password.value = ''

    const newObj = {
      username: username,
      password: password
    }

    dispatch(login(newObj))
  }

  /**
   * Sends a logout dispatch to the action creator.
   */
  const logoutHandler = async () => {
    dispatch(logout('empty'))
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

}

export default Login
