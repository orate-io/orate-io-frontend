// import userService from '../services/userService'

// export const accountReducer = (state = [], action) => {
//   let newState = state
//   switch (action.type){
//   case 'SIGNUP':
//     newState = state.concat(action.signup)
//     return state
//   default:
//     return state
//   }
// }

// export const signup = (newObj) => {
//   return async dispatch => {
//     const signup = await userService.signupReq(newObj)
//     console.log(signup)
//     dispatch({
//       type: 'SIGNUP',
//       signup
//     })
//   }
// }
