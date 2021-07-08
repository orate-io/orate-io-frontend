/**
 * @file R.
 */

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
 * @param fileObj
 * @returns {object} a
 */
export const fileSelect = (fileObj) => {
  console.log(fileObj)
  return async dispatch => {
    dispatch({
      type:'SELECT',
      fileObj
    })
  }
}

export default fileReducer

