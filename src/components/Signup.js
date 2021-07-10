/**
 * @file Signup component, user can enter their info into the fields and the component will then add their account to the database using
 * a post request.
 */
import React, { useState } from 'react'
import userService from '../services/userService'
import './../css/Login.css';

const Signup = () => {
    const [signinVisible, setSigninVisible] = useState(false)
    const hideWhenVisible = { display: signinVisible ? 'none' : '' }
    const showWhenVisible = { display: signinVisible ? '' : 'none' }
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

        if (password !== passwordResub) {
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
        <div>
            <div style={hideWhenVisible}>
                <br></br>
                <button onClick={() => setSigninVisible(true)} id="secondaryButton">Sign Up</button>
            </div>
            <div style={showWhenVisible}>
                <form onSubmit={handleSubmit} >
                    <div>
                        <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            id="textbox"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            id="textbox"
                        />
                    </div>

                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            id="textbox"
                        />
                    </div>

                    <div>
                        <input
                            type='password'
                            name='passwordResub'
                            placeholder='Confirm Password'
                            id="textbox"
                        />
                    </div>
                    <br></br>
                    <button type="submit">Sign Up</button>
                </form>
                <br></br>
                <button onClick={() => setSigninVisible(false)} id="secondaryButton">Cancel</button>
            </div>
        </div>
    )
}

export default Signup
