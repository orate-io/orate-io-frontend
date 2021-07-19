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
export const videoReducer = (state = [], action) => {
  console.log('ACTION IS', action)
  switch(action.type){
  case 'INIT':
    return action.vidList
  default:
    return state
  }
}

export const fileInit = () => {
  console.log('file init')
  return async dispatch => {
    const vidList = videoServices.getAll()
    console.log(vidList)
    dispatch({
      type:'INIT',
      vidList
    })
  }
}


export default videoReducer


