import React, { useState } from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/auth/login', values)
            if(response.status === 201) {
                localStorage.setItem('token', response.data.token)
                navigate('/')
            }
        } catch(err) {
            console.log(err.message)
        }
    }

  return (
    <>
      <div className="innerHeading-wrap">
        <Container>
          <h1>Login</h1>
        </Container>
      </div>

      <section>
        <Container className="py-5">
          <Row>
            <Col lg={6}>
              <Form onSubmit={handleSumbit}>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="form-control"
                    onChange={handleChanges}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    name="password"
                    id=""
                    className="form-control"
                    onChange={handleChanges}
                  />
                </div>
                <div className="pt-3">
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </div>
                <div className="py-3">
                  <span>Don't Have Account? </span>
                  <Link to="/register" className="text-blue-500">Signup</Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
