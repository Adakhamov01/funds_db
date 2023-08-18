import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Home() {

  return (
    <Container style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center flex-column'>
      Home
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </Container>
  )
}
