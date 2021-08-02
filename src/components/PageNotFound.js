/**
 * @file PageNotFound React component to allow user to be redirected to '/'
 * in the case of a bad URL (Error 404).
 */

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import { Link, Router } from 'react-router-dom'

import Star_Wars_BB8 from '../assets/images/Star_Wars_BB8.svg'

const PageNotFound = () => {
  return (
    <div>
      <Container style={{ position: 'fixed', top: '25%', left: '0', right: '0', margin: 'auto' }} >
        <Row className= "pageNotFound">
          <Col>
            <img className="pageNotFound" src={Star_Wars_BB8} alt="Page Not Found Beep Boop"/>
          </Col>
          <Col>
            <p style={{ textAlign:'center' }}>
                Page Not Found Beep Boop!
              <a href="/">Go to Home </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageNotFound
