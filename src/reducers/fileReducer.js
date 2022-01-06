/**
 * @file Handles all requests pertaining to changing the file state. Allows user to update file state.
 */

/**
 * File reducer sets the state of the file. Case SELECT sets the file state as the newly received fileObj.
 *
 * @param {object} state Initial state is empty.
 * @param {string} action Imports the file and action type the user posted.
 * @returns {object} Returns new state.
 */
export const fileReducer = (state = { }, action) => {
  let newState = state
  switch(action.type){
  case 'SELECT':
    newState = action.fileObj
    return newState
  default:
    return state
  }
}

/**
 * File select action creator allows the user to change the state of the file with the type SELECT.
 *
 * @param {object} fileObj Receives the file as an object.
 * @returns {object} Dispatches action with the file object and SELECT action type.
 */
export const fileSelect = (fileObj) => {
  return async dispatch => {
    dispatch({
      type:'SELECT',
      fileObj
    })
  }
}

export default fileReducer

