/**
 * @file App is where all the components are called.
 */
import React from 'react'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Video from './components/Video.js'

const App = () => {
  return (
    <div>
      <Login />
      <Signup />
      <Video />
    </div>
  )
}

export default App
