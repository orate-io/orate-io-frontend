/**
 *  @file this is for testing login component
 */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import reducer, { loginReducer } from '../reducers/loginReducer'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import store from '../store'
import Login from './Login'
import Signup from './Signup'
import deepFreeze from 'deep-freeze'
import app from '../services/userService'

  /**
   * This is the test for the login part when user is logged in and token is sotred in local storage. Logout button should be rendered and when
   * it is clicked, token should be deleted.
   */
test('Click logout after entering user login information', () => {
  const localUser = [{username: 'Runqiao', password: '12345678'}]
  /**
   * Not sure if token should be tested in this way.
   */
  const token = 213123123 
  window.localStorage.setItem('loggedUser', app.setToken(token))
  
  const mockHandler = jest.fn()

  const loginTest = render(
    <Provider store={store}>
      <Login/> 
    </Provider>
  )
  const button = loginTest.getByText('Logout')
  fireEvent.click(button)
  expect(window.localStorage.getItem('loggedUser')).toBe(null)
})


/**
   * In this test, rendering login form when there are no logged in user in local storage. However, when I am running test, a problem is showing up. In userService.js,
   * line 38, I am not sure if the returned response.data contain token, based on the description, loginObject should contain username and password and token should 
   * be stored in local storage. Same thing might happen again for signup form. Waiting to find out a solution
   */
describe('login reducer', () => {
  test('login when not in local storage, return new state', () => {
    const state = []
    const token = null 
    window.localStorage.setItem('loggedUser', app.setToken(token))
    const loginObject = {username: 'Runqiao', password: '123asd'}
    const action = {
      type: 'LOGIN',
      User: {
        username: 'Li',
        password: '0123456789'
      }
    }

    deepFreeze(state)
    const newState = loginReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.User)
  })
})

