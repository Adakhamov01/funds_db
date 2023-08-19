import React, { useState } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://funds-db-api.vercel.app/register', {name, email, password})
    .then((success) => {
      console.log(success);
      navigate("/login")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <Container style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <Card className='p-5' bg='success'>
        <Form onSubmit={handleSubmit} style={{ width: "18rem" }}>
          <h3>Register</h3>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Button type='submit' variant='light'>Register</Button>
          <Form.Group controlId="formGroupEmail">
            <Form.Label className='mt-3'>Already have an account</Form.Label>
          </Form.Group>
          <Button variant='outline-light' as={Link} to='/login'>Login</Button>
        </Form>
      </Card>
    </Container>
  )
}
