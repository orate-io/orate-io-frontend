import userService from '../services/userService'

export const accountReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  let newState = state
  switch (action.type){
  case 'SIGNUP':
    newState = state.concat(action.signup)
    console.log(newState)
    return newState
  default:
    return state
  }
}

export const signup = (newObj) => {
  console.log('SIGNUP')
  console.log(newObj)
  return async dispatch => {
    const signup = await userService.signupReq(newObj)
    console.log(signup)
    dispatch({
      type: 'SIGNUP',
      signup
    })
  }
}