import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerlogo from "../../src/assets/images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-light">
      <Container >
        <Row className="border-bottom py-5">
          <Col md={5} sm={12} className="text-center text-md-start">
            <div>
            <Link to="/">
              <img src={footerlogo} alt="Logo" className="footer-logo mb-3" />
            </Link>
            <div>
              <p>
                "Welcome to [School Name], where education meets excellence! Our
                school is dedicated to fostering a nurturing and innovative
                learning environment for students from kindergarten through 12th
                grade."
              </p>
            </div>
            </div>
          </Col>

          <Col md={3} sm={12} className="">
            <nav>
              <h4>our services</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light">
                  <i class="bi bi-chevron-right"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-light">
                  <i class="bi bi-chevron-right"></i>  About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-light">
                  <i class="bi bi-chevron-right"></i> Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-light">
                  <i class="bi bi-chevron-right"></i>  Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col md={4} sm={12} className="">
          <h4>Contact Us</h4>
            <div className="pt-2">
              <a href="mailto:info@yourcompany.com" className="text-light">
                <i className="bi bi-envelope-fill me-2"></i>info@yourcompany.com
              </a>
            </div>
            <div className="mt-3">
              <a href="tel:+1234567890" className="text-light">
                <i className="bi bi-telephone-fill me-2"></i>+123 456 7890
              </a>
            </div>
          </Col>

        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your school Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
