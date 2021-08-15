/**
 * @file This is the test file for userService.js
 */
//const request = require('supertest')
//const userService = require( './userService.js')
import app from './userService'

test('log in post request', async function() {
  await app.loginReq({ username: 'asd', password: 'asdasd' }).then((value => {assert (value.status === 200)}))
})

test('sign up post request', () => {
  //request(app.signupReq)
  // similar as above
})

