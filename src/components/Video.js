/**
 * @file
 */
import React, { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { fileInit, fileSelect } from '../reducers/fileReducer'
import videoServices from '../services/videoServices'
const Video = () => {
  const dispatch = useDispatch()
  const getFile = useSelector(state => state.file)

  useEffect( async () => {
    dispatch(fileInit)
  }, [])

  const handleChange = (event) => {
    event.preventDefault()

    console.log('Given file in handler is: ', event.target.files[0])
    dispatch(fileSelect(event.target.files[0]))
  }

  const onUpload = (event) => {
    event.preventDefault()

    let newFile = getFile
    console.log('UPLOADING...', newFile)
    const newForm = new FormData()

    newForm.append('file', newFile)

    for (var value of newForm.values()) {
      console.log(value)
    }

    videoServices.createVid(newForm)
  }

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

      </div>
    )
  }
}


export default Video
