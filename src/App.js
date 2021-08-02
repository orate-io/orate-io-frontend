/**
 * @file App is where all the components are called.
 */
import React from 'react'
import Login from './components/Login.js'
import PageNotFound from './components/PageNotFound.js'
import Signup from './components/Signup.js'

const App = () => {
  return (
    <div>
      <Login />
      <Signup />
      <PageNotFound />
    </div>
  )
}

export default App
