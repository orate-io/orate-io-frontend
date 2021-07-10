/**
 * @file Login component, takes data from form when submitted and sends a dispatch to the login reducer, then sets local storage
 * to the token.
 */
import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../reducers/loginReducer'
import './../css/Login.css';



const Login = () => {


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
    if (loggedIn) {
        return (
            <div>
                <button type="submit" onClick={logoutHandler} > Logout </button>
            </div>
        )
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <div>

                        <input
                            type='text'
                            placeholder='Username'
                            id="textbox"
                        />
                    </div>

                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            id="textbox"
                        />
                    </div>

                    <br></br>
                    <button id="submit" type="submit">Log In</button>
                    <div>
                        <br></br>
                    </div>
                </form>

            </div>

        )
    }

}

export default Login

