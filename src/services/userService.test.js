/**
 * @file This is the test file for userService.js
 */
import userService from './userService'
import supertest from 'supertest'
import request from 'supertest'
import {loginReq} from './userService'
import {signupReq} from './userService'


test('log in post request', () => {
  request(loginReq).post('http://localhost:3000/login')
  console.log(request(loginReq))
})

test('sign up post request', () => {
  request(signupReq)
})

