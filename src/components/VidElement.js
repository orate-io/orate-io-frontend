/**
 * @file Vid element is a single element from the array of videos. It will display all the necessary information for each video.
 */
import React from 'react'
/* -import state
  -display single video
  -expand or contract for greater details */
// eslint-disable-next-line react/prop-types
const VidElement = ({ video }) => {
  return (
    <div>
      <p>{ video }</p>
    </div>
  )
}

export default VidElement
