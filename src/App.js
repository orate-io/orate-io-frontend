/**
 * @file App is where all the components are called.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/Login.js'
import PageNotFound from './components/PageNotFound.js'
import Signup from './components/Signup.js'
import Video from './components/Video.js'

const App = () => {

  return (
    <Router>
      <Link to="/login">LOGIN</Link>
      <Link to="/videos">VIDEOS</Link>
      <Switch>
        <Route path="/login">
          <Login />
          <Signup />
        </Route>
        <Route path="/videos">
          <Video />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
