/**
 * @file Vid element is a single element from the array of videos. It will display all the necessary information for each video.
 */
import React from 'react'
import propTypes from 'prop-types'

const VidElement = ({ video }) => {
  return (
    <div>
      <p>{ video }</p>
    </div>
  )
}

VidElement.propTypes = {
  video: propTypes.object
}

export default VidElement
