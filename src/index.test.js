/**
 * @file This is the test file for App.js.
 */
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
