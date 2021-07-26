/**
 * @file This is the test file for App.js.
 */
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
// eslint-disable-next-line no-unused-vars
import env from 'react-dotenv'


test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
