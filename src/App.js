/**
 * @file App is where all the components are called.
 */
import React, { useState } from 'react'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import './css/Login.css'

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false)
  const hideLoginWhenVisible = { display: loginVisible ? 'none' : '' }
  const showLoginWhenVisible = { display: loginVisible ? '' : 'none' }

  const [signinVisible, setSigninVisible] = useState(false)
  const hideSigninWhenVisible = { display: signinVisible ? 'none' : '' }
  const showSigninWhenVisible = { display: signinVisible ? '' : 'none' }


  return (
    <h1>
      <p>Orate IO</p>
      <div style={showLoginWhenVisible}>
        <Login />
        <button onClick={() => setLoginVisible(false)} id="secondaryButton">Cancel</button>
      </div>
      <div style={hideLoginWhenVisible}>
        <div style={hideSigninWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>Log In</button>
        </div>
      </div>
      <div style={hideSigninWhenVisible}>
        <div style={hideLoginWhenVisible}>
          <br></br>
          <button onClick={() => setSigninVisible(true)} id="secondaryButton">Sign Up</button>
        </div>
      </div>
      <div style={showSigninWhenVisible}>
        <Signup />
        <button onClick={() => setSigninVisible(false)} id="secondaryButton">Cancel</button>
      </div>
    </h1>
  )
}

export default App
