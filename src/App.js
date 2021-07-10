/**
 * @file App is where all the components are called.
 */
import React, { useState } from 'react'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import './css/Login.css';

const App = () => {
    const [loginVisible, setLoginVisible] = useState(false)
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }

    const [signinVisible, setSigninVisible] = useState(false)
    const hideWhenVisible1 = { display: signinVisible ? 'none' : '' }
    const showWhenVisible1 = { display: signinVisible ? '' : 'none' }


    return (
        <h1>
            <p>Orate IO</p>
            <div style={showWhenVisible}>
                <Login />
                <button onClick={() => setLoginVisible(false)} id="secondaryButton">Cancel</button>
            </div>
            <div style={hideWhenVisible}>
                <div style={hideWhenVisible1}>
                    <button onClick={() => setLoginVisible(true)}>Log In</button>
                </div>
            </div>
            <div style={hideWhenVisible1}>
                <div style={hideWhenVisible}>
                    <br></br>
                    <button onClick={() => setSigninVisible(true)} id="secondaryButton">Sign Up</button>
                </div>
            </div>
            <div style={showWhenVisible1}>
                <Signup />
                <button onClick={() => setSigninVisible(false)} id="secondaryButton">Cancel</button>
            </div>
        </h1>
    )
}

export default App
