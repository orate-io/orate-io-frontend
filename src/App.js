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
<<<<<<< HEAD
    <div>
      <Login />
      <Signup />
      <PageNotFound />
    </div>
=======
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
      </Switch>
    </Router>
>>>>>>> f59007a061fceb557c9cd319e94c793a8e4b06f4
  )
}

export default App
