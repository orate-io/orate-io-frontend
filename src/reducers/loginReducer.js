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
  switch(action.type){
  case 'TOKENLOGIN':
    return {
      ...state,
      token: 'Bearer ' + action.token
    }
  case 'LOGIN':
    newState = {
      ...state,
      token: 'Bearer ' + action.loginReq.token
    }
    userService.setToken(newState.token, action.remember)
    return newState
  case 'LOGOUT':
    newState = {}
    userService.setToken()
    return newState
  case 'ERROR':
    newState = { error: 'username or password incorrect' }
    return newState
  default:
    return state
  }
}

export const tokenLogin = (token) => {
  return async dispatch => {
    dispatch({
      type: 'TOKENLOGIN',
      token
    })
  }
}

/**
 * Login Takes the object received and sends a post request to the login service where a token is received.
 * The token is stored in the local storage, and dispatched to the reducer.
 *
 * @param {object} newObj The login info received from the frontend.
 * @param {boolean} remember Should the user token be stored in the local storage?
 * @returns {object} Dispatches the type login and the token to the reducer.
 */
export const login = (newObj, remember) => {
  return async dispatch => {
    const loginReq = await userService.loginReq(newObj)
    if (loginReq) {
      dispatch({
        type: 'LOGIN',
        loginReq,
        remember
      })
    }
    else{
      dispatch({
        type: 'ERROR'
      })
    }
  }
}

/**
 * Logout removes the logged user from local storage and sends a logout dispatch.
 *
 * @returns {object} Dispatches the type logout to the reducer.
 */
export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export default loginReducer
