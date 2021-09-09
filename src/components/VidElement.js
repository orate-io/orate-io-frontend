/**
 * @file Vid element is a single element from the array of videos. It will display all the necessary information for each video.
 */
import React from 'react'
import propTypes from 'prop-types'

const VidElement = ({ video }) => {
  return (
    <div>
<<<<<<< HEAD
      <p> {video.video.name} </p>
      <p> {video.video.url} </p>
      <p> {video.video.id} </p>
=======
      <video id="example_video_1" className="video-js vjs-default-skin"
        controls preload="auto" width="500" height="500"
        data-setup='{"example_option":true}'>
        <source src={vidObj.video.url} type='video/mp4' />
        <source src={vidObj.video.url} type='video/webm' />
      </video>

      <p> {vidObj.video.name} </p>
      <p> {vidObj.video.id} </p>
>>>>>>> ffca8ab (Video streaming update)
    </div>
  )
}

VidElement.propTypes = {
  video: propTypes.object
}

export default VidElement
