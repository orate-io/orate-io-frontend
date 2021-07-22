/**
 * @file R.
 */

import videoServices from '../services/videoServices'

/**
 * F.
 *
 * @param {object} state S.
 * @param {string} action S.
 * @returns {object} S.
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

/**.
 * A
 *
 * @param {object} fileObj a
 * @returns {object} a
 */
export const fileSelect = (fileObj) => {
  return async dispatch => {
    dispatch({
      type:'SELECT',
      fileObj
    })
  }
}

export const fileInit = () => {
  return async dispatch => {
    const vidList = videoServices.getAll()
    dispatch({
      type:'INIT',
      vidList
    })
  }
}


export default fileReducer

