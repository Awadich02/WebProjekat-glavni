import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // Replace this with your actual login logic
    const loginSuccess = email === "user@example.com" && password === "password";

    if (loginSuccess) {
      alert("Login successful!"); // or use a better notification method
      navigate("/dashboard");
    } else {
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4" md="6" sm="8" className="mx-auto">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleLogin}>
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
            <Button color="primary" block>Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
