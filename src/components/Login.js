/**
 * @file Login component, takes data from form when submitted and sends a dispatch to the login reducer, then sets local storage
 * to the token.
 * @author Yacine Saoudi
 */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/loginReducer'

const Login = () => {
  const dispatch = useDispatch()
  /**.
   * @method handleSubmit - takes data from the forms, cretes an obejct with it, then sends it to the login reducer to make a request.
   *
   * @param event used to prevent the default action on button press; stops the page from refreshing too soonW
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
   * @function useEffect - on page start, check if the user is logged in using the token.
   */
  useEffect(() => {
    const loggedIn = window.localStorage.getItem('loggedUser')
    if (loggedIn){
      console.log(loggedIn)
    }
  })

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
