import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = ()=> {
  
  const[values, setValues]=useState({
    fullname:'',
    email:'',
    phone:'',
    std:'',
    password:''
  })

  const handleChange =(e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const response= await axios.post('http://localhost:5000/auth/register', values)
     console.log(response)
    } catch (error) {
      console.log(error)
    }

  };



  return (
    <>
      <div className="innerHeading-wrap">
        <Container>
          <h1>Register</h1>
        </Container>
      </div>

      <section>
        <Container className="py-5">
          <Row>
            <Col lg={6}>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Fullname</label>
                  <input type="text" name="fullname" id="" className="form-control"   onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" id="" className="form-control"   onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Phone number</label>
                  <input type="text" name="phone" id="" className="form-control"   onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Student Class</label>
                  <input type="text" name="std" id="" className="form-control"   onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input type="text" name="password" id="" className="form-control"   onChange={handleChange} />
                </div>
                <div className="pt-3">
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Register;
