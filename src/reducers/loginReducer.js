/**
 * @file LoginReducer contains all the reducers and action creators for the login functions.
 * @author Yacine Saoudi
 */
import userService from '../services/userService'
/**.
   * @reducer loginReducer - If the case is type 'LOGIN' then it takes the token received from the backend, and sets the token
   * to the state.
   * @param state - The state of the Reducer.
   * @param action - The params sent from the action creator.
   * @returns - Returns the new state as the token
   * @param event used to prevent the default action on button press; stops the page from refreshing too soon.
   */
export const loginReducer = (state = {  }, action) => {
  let newState = state
  console.log(action.loginReq)
  switch(action.type){
  case 'LOGIN':
    newState = action.loginReq.token
    userService.setToken(newState)
    console.log(newState)
    return newState
  default:
    return state
  }
}
/**.
   * @method Login - Takes the object received and sends a post request to the login service where a token is received.
   * The token is stored in the local storage, and dispatched to the reducer.
   * @param newObj - the login info received from the frontend.
   * @dispatch dispatches the type login and the token to the reducer.
   * @returns
   */
export const login = (newObj) => {
  console.log('LOGIN')
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

export default loginReducer
