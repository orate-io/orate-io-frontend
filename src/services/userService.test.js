/**
 * @file This is the test file for userService.js
 */
//const request = require('supertest')
//const userService = require( './userService.js')
import app from './userService'
const assert = require('assert');


/**Testing login function which sends appropriate post request and gets appropriate response code */
test('log in post request', async function() {
  await app.loginReq({ username: 'Sky', password: '123456' }).then((value => {assert (value === 'OK')}))
})

/**Testing sign up function which sends appropriate post request and gets appropriate response code */
test('sign up post request', async function() {
  await app.signupReq({ username: 'asd', password: '1231564654' }).then((value => {assert (value === 'OK')}))
  await app.loginReq({ username: 'asd', password: '1231564654' }).then((value => {assert (value === 'OK')}))
})

