/**
 * @file Store is where the middleware and combined reducers are added onto the reducers.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loginReducer } from './reducers/loginReducer'
import { fileReducer } from './reducers/fileReducer'

const combinedReducer = combineReducers({
  login: loginReducer,
  file: fileReducer
})

const store = createStore(
  combinedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
