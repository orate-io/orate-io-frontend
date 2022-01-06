/**
 * @file App is where all the components are called.
 */
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import { useDispatch } from 'react-redux'
import { tokenLogin } from './reducers/loginReducer.js'
import Video from './components/Video.js'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = window.localStorage.getItem('loggedUser')
    if (token) {
      dispatch(tokenLogin(token))
    }
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/videos">
          <Video/>
        </Route>
        <Home />
      </Switch>
    </Router>
  )
}

export default App
