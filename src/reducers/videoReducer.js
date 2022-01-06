/**
 * @file Video reducer handles all the dispatches related to videos from the backend.
 */

import videoServices from '../services/videoServices'

/**
 * Video reducer handles getting the video array from the backend associated with the user.
 *
 * @param {object} state The list of videos associated with user account.
 * @param {string} action Action type INIT allows user to get all the videos as an array from the backend.
 * @returns {object} Returns the state.
 */
export const videoReducer = (state = [], action) => {
  switch(action.type){
  case 'GET_ALL':
    return action.vidList
  default:
    return state
  }
}

/**
 * File init is the action creator that sends a get request for the videos and receives an array that gets dispatched to the reducer.
 *
 * @param fileObj
 * @param content
 * @returns {object} Dispatches action with the INIT action type and an array of videos.
 */
export const vidInit = () => {
  return async dispatch => {
    const vidJSON = await videoServices.getAll()
    const vidList = vidJSON.data
    dispatch({
      type: 'GET_ALL',
      vidList
    })
  }
}


export default videoReducer


