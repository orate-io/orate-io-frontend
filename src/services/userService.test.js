/**
 * @file This is the test file for userService.js
 */
//const request = require('supertest')
//const userService = require( './userService.js')
import app from './userService'
const assert = require('assert');

test('log in post request', async function() {
  await app.loginReq({ username: 'Sky', password: '123456' }).then((value => {assert (value === 'OK')}))
})

test('sign up post request', async function() {
  await app.signupReq({ username: 'asd', password: '1231564654' }).then((value => {assert (value === 'OK')}))
  await app.loginReq({ username: 'asd', password: '1231564654' }).then((value => {assert (value === 'OK')}))
})

