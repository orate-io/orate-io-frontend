/**
 * @file App is where all the components are called.
 */
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Video from './components/Video.js'
import { useDispatch } from 'react-redux'
import { tokenLogin } from './reducers/loginReducer.js'
import ClientLogin from './components/Client/ClientLogin'

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
        </Route>
        <Route path="/videos">
        </Route>
        <Video/>
      </Switch>
      <ClientLogin/>
    </Router>
  )
}

export default App
