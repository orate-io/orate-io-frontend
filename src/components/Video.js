/**
 * @file Allows user to pick and upload a file to the backend, also displays all the videos the user posted.
 */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fileSelect } from '../reducers/fileReducer'
import { fileInit } from '../reducers/videoReducer'
import videoServices from '../services/videoServices'
import VidElement from './VidElement'
import { logout } from '../reducers/loginReducer'
import { Link } from 'react-router-dom'

/*
 * Deals with user video posting, includes upload button and dispatch method. Also returns the list of videos.
 */
const Video = () => {
  const dispatch = useDispatch()

  /* Gets the state from the combined reducer. */
  const getFile = useSelector(state => state.file)
  const getUser = useSelector(state => state.login)

  /**
   * Dispatches file object the user provides on upload button click. Updates state.
   *
   * @param {object} event Prevents page from refreshing prematurely.
   */
  const handleChange = (event) => {
    event.preventDefault()
    dispatch(fileSelect(event.target.files[0]))
  }

  /**
   * Sends video to backend in FormData format.
   *
   * @param {object} event Prevents page from refreshing prematurely.
   */
  const onUpload = async (event) => {
    event.preventDefault()
    if (getFile.name.split('.').pop() === 'mp4') {
      await videoServices.createVid(getFile)
      console.log('aftercreate')
    }
  }

  const logoutHandler = () => {
    dispatch(logout())
  }
  /* Checks if user is logged in, if true, then return the video page, if false, return an empty page */
  let loggedIn = getUser.token
  if (!loggedIn) {
    return(
      <div>
        <p>PLease log in first</p>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    )} else {
    return (
      <div>
        <div>
          <input type="file" onChange={handleChange} />
          <button onClick={onUpload}>
            UPLOAD
          </button>
          <button type='submit' onClick={logoutHandler}>
            Logout
          </button>
        </div>
        <ul>
          {getVids.map(video =>
            <li key={video.id}>
              <VidElement video={video} />
            </li>
          )}
        </ul>

      </div>
    )
  }
}

export default Video
