/**
 * @file
 */
import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { fileSelect } from '../reducers/fileReducer'

const Video = () => {
  const dispatch = useDispatch()
  const getFile = useSelector(state => state)

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(fileSelect(event.target.files[0]))
  }

  const onUpload = (event) => {
    event.preventDefault()
    let newFile = getFile.file
    console.log(newFile)
  }

  let loggedIn = window.localStorage.getItem('loggedUser')
  if (loggedIn) {
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
      </div>
    )
  }
}


export default Video
