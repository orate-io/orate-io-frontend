/**
 * @file This is the test file for App.js.
 */
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
