/**
 * @file This is for testing login component.
 */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Signup from './Signup'
import ReactDOM from 'react-dom'

test('Signup updates parent state and calls onSubmit', () => {

  const signupObj = jest.fn()
  const component = render(
    <Signup/>
  )

  const input_username = component.container.querySelector("input[name='username']")
  const input_email = component.container.querySelector("input[name='email']")
  const input_password = component.container.querySelector("input[name='password']")
  const input_passwordResub = component.container.querySelector("input[name='passwordResub']")

  fireEvent.change(
    input_username, { target: { value: 'Testuser' }
    })

  fireEvent.change(
    input_email, { target: { value: 'testemail@gmail.com' }
    })

  fireEvent.change(
    input_password, { target: { value: 'testpassword' }
    })

  fireEvent.change(
    input_passwordResub, { target: { value: 'testpassword' }
    })
  // const form = component.container.querySelector('form')
  const button = component.getByText('sign up')
  fireEvent.click(button)
  expect(signupObj.mock.calls.length).toBe(0)

})

test('Show error message when password does not match passwordResub', () => {

  const signupObj = jest.fn()
  const component = render(
    <Signup/>
  )

  const input_username = component.container.querySelector("input[name='username']")
  const input_email = component.container.querySelector("input[name='email']")
  const input_password = component.container.querySelector("input[name='password']")
  const input_passwordResub = component.container.querySelector("input[name='passwordResub']")

  fireEvent.change(
    input_username, { target: { value: 'Testuser' }
    })

  fireEvent.change(
    input_email, { target: { value: 'testemail@gmail.com' }
    })

  fireEvent.change(
    input_password, { target: { value: 'testpassword' }
    })

  fireEvent.change(
    input_passwordResub, { target: { value: 'testpassword1' }
    })
  // const form = component.container.querySelector('form')


})
