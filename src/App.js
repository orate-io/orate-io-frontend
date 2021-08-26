/**
 * @file App is where all the components are called.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route/*,
  Link*/
} from 'react-router-dom'
/*import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Video from './components/Video.js'*/
import ClientLogin from './components/Client/ClientLogin'
const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/login">
        </Route>
        <Route path="/videos">
        </Route>
      </Switch>
      <ClientLogin/>
    </Router>
  )
}

export default App
