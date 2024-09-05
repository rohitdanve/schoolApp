import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', {
      fullName,
      phoneNumber,
      email,
      selectedClass,
      password,
      confirmPassword
    });
  };

  return (

    <>
    
    <div className="innerHeading-wrap">
  <Container>
    <h1>Register</h1>
  </Container>
</div>

    <Container>
      <Row className="justify-content-md-center login-wrap my-5">
        <Col md={8}>
  
          <Form onSubmit={handleSubmit}>
            {/* Full Name */}
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>

            {/* Email ID */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            {/* Class Selection */}
            <Form.Group controlId="formClassSelection" className="mb-3">
              <Form.Label>Select Class</Form.Label>
              <Form.Control
                as="select"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                required
              >
                <option value="">Choose your class</option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    Class {num + 1}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Password */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
          </Form>

          {/* Link to Login */}
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Register;
