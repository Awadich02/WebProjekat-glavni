import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = (event) => {
    event.preventDefault();

    // Hard-coded credentials
    const adminCredentials = { email: "admin@gmail.com", password: "admin123" };
    const userCredentials = { email: "user@gmail.com", password: "user123" };

    console.log(`Email: ${email}, Password: ${password}`);

    if (isLogin) {
      if (email === adminCredentials.email && password === adminCredentials.password) {
        alert("Admin login successful!");
        navigate("../components/AdminDashboard/AdminDashboard");// Correct URL for mern-admin-master
      } else if (email === userCredentials.email && password === userCredentials.password) {
        alert("User login successful!");
        navigate("/home"); // Redirect to home page
      } else {
        alert("Login failed! Please check your credentials.");
      }
    } else {
      // Handle registration logic
      alert("Registration successful!");
      setIsLogin(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4" md="6" sm="8" className="mx-auto">
        <h2 className="text-center">{isLogin ? "Login" : "Register"}</h2>
        <Form onSubmit={handleAuth}>
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
          {!isLogin && (
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input 
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                placeholder="Confirm your password" 
              />
            </FormGroup>
          )}
          <Button color="primary" block>{isLogin ? "Login" : "Register"}</Button>
          <p className="text-center mt-3">
            {isLogin ? "Need an account?" : "Already have an account?"}{" "}
            <Button color="link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register" : "Login"}
            </Button>
          </p>
        </Form>
      </Col>
    </Row>
  </Container>
);
};

export default AuthPage;
