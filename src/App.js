/**
 * @file App is where all the components are called.
 */
import React from 'react'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import './css/Login.css';

const App = () => {
    return (
        <h1>
            <Login />
            <Signup />
        </h1>
    )
}

export default App
