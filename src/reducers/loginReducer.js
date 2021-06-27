/**
 * @file LoginReducer contains all the reducers and action creators for the login functions.
 */
import userService from '../services/userService'

/**
 * LoginReducer If the case is type 'LOGIN' then it takes the token received from the backend, and sets the token
 * to the state. Case 'LOGOUT' sets the state to empty.
 *
 * @param {object} state The state of the Reducer.
 * @param {string} action The params sent from the action creator.
 * @returns {object} Returns the new state as the token.
 */
export const loginReducer = (state = { }, action) => {
  let newState = state
  console.log(action.loginReq)
  switch(action.type){
  case 'LOGIN':
    newState = action.loginReq.token
    userService.setToken(newState)
    return newState
  case 'LOGOUT':
    newState = {}
    userService.setToken()
    return newState
  default:
    return state
  }
}

/**
 * Login Takes the object received and sends a post request to the login service where a token is received.
 * The token is stored in the local storage, and dispatched to the reducer.
 *
 * @param {object} newObj The login info received from the frontend.
 * @returns {object} Dispatches the type login and the token to the reducer.
 */
export const login = (newObj) => {
  return async dispatch => {
    const loginReq = await userService.loginReq(newObj)
    window.localStorage.setItem(
      'loggedUser', JSON.stringify(loginReq)
    )
    dispatch({
      type: 'LOGIN',
      loginReq
    })
  }
}

/**
 * Logout removes the logged user from local storage and sends a logout dispatch.
 *
 * @returns {object} Dispatches the type logout to the reducer.
 */
export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedUser')
    dispatch({
      type:'LOGOUT'
    })
  }
}

export default loginReducer
