/**
 * @file Allows user to pick and upload a file to the backend, also displays all the videos the user posted.
 */
import React, { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { fileInit, fileSelect } from '../reducers/fileReducer'
import videoServices from '../services/videoServices'
import VidElement from './VidElement'

const Video = () => {
  const dispatch = useDispatch()
  /* Gets the state from the combined reducer. */
  const getFile = useSelector(state => state.file)
  const getVids = useSelector(state => state.video)

  useEffect( async () => {
    dispatch(fileInit)
  }, [])
  /**
   * Dispatches file object the user provides on upload button click. Updates state.
   *
   * @param {object} event Prevents page from refreshing prematurely.
   */
  const handleChange = (event) => {
    event.preventDefault()

    dispatch(fileSelect(event.target.files[0]))
  }
  /**.
   * Sends video to backend in FormData format.
   *
   * @param {object} event Prevents page from refreshing prematurely.
   */
  const onUpload = (event) => {
    event.preventDefault()

    let newFile = getFile
    const newForm = new FormData()

    newForm.append('file', newFile)

    videoServices.createVid(newForm)
  }
  /* Checks if user is logged in, if true, then return the video page, if false, return an empty page */

  let loggedIn = window.localStorage.getItem('loggedUser')
  if (!loggedIn) {
    return(
      <p>hi</p>
    )} else {
    return (
      <div>
        <div>
          <input type="file" onChange={handleChange} />
          <button onClick={onUpload}>
            UPLOAD
          </button>
        </div>
        <p>here</p>
        {getVids.map(video =>
          <VidElement key={video.id} video={video} />)}
      </div>
    )
  }
}


export default Video
