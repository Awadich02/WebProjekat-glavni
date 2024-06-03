// src/pages/Register.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    const registrationData = {
      email,
      password,
      role
    };

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) {
        alert('Registration successful!');
        // Reset the form
        setEmail('');
        setPassword('');
        setRole('');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed!');
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4" md="6" sm="8" className="mx-auto">
          <h2 className="text-center">Registruj se</h2>
          <Form onSubmit={handleRegister}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="role">Uloga</Label>
              <Input 
                type="text" 
                name="role" 
                id="role" 
                placeholder="Enter your role" 
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" block>Register</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
