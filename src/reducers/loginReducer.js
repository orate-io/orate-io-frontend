import userService from '../services/userService'

export const loginReducer = (state = {  }, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  let newState = state
  switch(action.type){
  case 'LOGIN':
    newState = action.newObj
    console.log(newState)
    return newState
  default:
    return state
  }
}

export const login = (newObj) => {
  console.log('LOGIN')
  console.log(newObj)
  return async dispatch => {
    const loginReq = await userService.loginReq(newObj)
    console.log(loginReq)
    dispatch({
      type: 'LOGIN',
      newObj
    })
  }
}

export default loginReducer