/**
 * @file App is where all the components are called.
 */
import React from 'react'
import Login from './components/Login.js'
import Signup from './components/Signup.js'

const App = () => {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  )
}

export default App
