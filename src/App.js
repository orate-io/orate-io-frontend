/**
 * @file App is where all the components are called.
 */
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Video from './components/Video.js'
import { useDispatch } from 'react-redux'
import { tokenLogin } from './reducers/loginReducer.js'

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
        <Video/>
      </Switch>
    </Router>
  )
}

export default App
