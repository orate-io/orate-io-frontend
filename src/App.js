/**
 * @file App is where all the components are called.
 */
import React from 'react'
import {  useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import VidElement from './components/VidElement.js'
import Video from './components/Video.js'

const App = () => {
  const videos = useSelector(state => state.videos)

  return (
    <Router>
      <Link to="/login">LOGIN</Link>
      <Link to="/videos">VIDEOS</Link>
      {videos.map(video =>
        <VidElement key={video.id} video={video} />)}
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
  )
}

export default App
