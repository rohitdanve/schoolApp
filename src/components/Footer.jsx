import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerlogo from "../../src/assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrap">
          <Container>
            <Row>
              <div className="col-lg-4">
                <div className="footer_logo">
                  <img alt="" className="footer-default" src={footerlogo} />
                </div>
                <p>
                  "[School Name] was founded on the belief that every child
                  deserves a quality education in an environment that supports
                  their growth and development. With a focus on individualized
                  learning, we offer a broad curriculum that caters to a wide
                  range of interests and abilities. Our state-of-the-art
                  facilities and experienced educators are dedicated to helping
                  students achieve their best."
                </p>
              </div>
              <div className="col-lg-2 col-md-3">
                <h3>Quick links</h3>
                <ul className="footer-links ps-2">
                 <li>
                    <Link as={Link} to="/" className="text-light">
                      <i class="bi bi-chevron-right"></i> About
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/" className="text-light">
                      <i class="bi bi-chevron-right"></i> Gallery
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/" className="text-light">
                      <i class="bi bi-chevron-right"></i> Services
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/" className="text-light">
                      <i class="bi bi-chevron-right"></i> Blog
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/" className="text-light">
                      <i class="bi bi-chevron-right"></i> Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/" className="text-light">
                      <i class="bi bi-chevron-right"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <h3>Opening Hours</h3>
                <ul className="unorderList hourswrp">
                  <li>
                    Monday <span>08:00 - 02:00</span>
                  </li>
                  <li>
                    Tuesday <span>08:00 - 02:00</span>
                  </li>
                  <li>
                    Wednesday <span>08:00 - 02:00</span>
                  </li>
                  <li>
                    Thursday <span>08:00 - 02:00</span>
                  </li>
                  <li>
                    Friday <span>08:00 - 02:00</span>
                  </li>
                  <li>
                    Saturday <span>08:00 - 02:00</span>
                  </li>
                  <li>
                    Sunday <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="footer_info">
                  <h3>Get in Touch</h3>
                  <ul className="footer-adress">
                    <li className="footer_address">
                      {" "}
                      <i className="bi bi-geo-alt"></i>{" "}
                      <span>123 Lorem Ipsum, 32 sit Atlanta</span>{" "}
                    </li>
                    <li className="footer_email">
                      {" "}
                      <i className="bi bi-envelope" aria-hidden="true"></i>{" "}
                      <span>
                        <a href="mailto:info@example.com"> info@example.com </a>
                      </span>{" "}
                    </li>
                    <li className="footer_phone">
                      {" "}
                      <i className="bi bi-telephone"></i>{" "}
                      <span>
                        <a href="tel:7704282433"> 770-123-4567</a>
                      </span>{" "}
                    </li>
                  </ul>
                  <div className="social-icons footer_icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <div class="footer-bottom text-center">
          <div class="container">
            <div class="copyright-text">
              Copyright © International School System 2024. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
