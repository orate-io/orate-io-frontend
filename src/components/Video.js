/**
 * @file Allows user to pick and upload a file to the backend, also displays all the videos the user posted.
 */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fileSelect } from '../reducers/fileReducer'
import videoServices from '../services/videoServices'
// eslint-disable-next-line no-unused-vars
import VidElement from './VidElement'
/*
 * Deals with user video posting, includes upload button and dispatch method. Also returns the list of videos.
 */
const Video = () => {
  const dispatch = useDispatch()
  /* Gets the state from the combined reducer. */
  const getFile = useSelector(state => state.file)
  // eslint-disable-next-line no-unused-vars
  const getVids = useSelector(state => state.video)

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
  const onUpload = (event) => {
    event.preventDefault()
    if ((getFile.name.split('.').pop() === 'mp4')) {
      videoServices.createVid(getFile)
    }
  }

  /* Checks if user is logged in, if true, then return the video page, if false, return an empty page */
  let loggedIn = window.localStorage.getItem('loggedUser')
  if (!loggedIn) {
    return(
      <p>PLease log in first</p>
    )} else {
    return (
      <div>
        <div>
          <input type="file" onChange={handleChange} />
          <button onClick={onUpload}>
            UPLOAD
          </button>
        </div>
        <VidElement />
      </div>
    )
  }
}

export default Video
