import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
   <>

<div className="innerHeading-wrap">
  <Container>
    <h1>Contact Us</h1>
  </Container>
</div>

<section>
<div className="innerContent-wrap">
  <Container>
    <div className="cont_info ">
      <Row>
        <div className="col-lg-3 col-md-6 md-mb-30">
          <div className="address-item style">
            <div className="address-icon"> <i className="bi bi-telephone-fill"></i> </div>
            <div className="address-text">
              <h3 className="contact-title">Call Us</h3>
              <ul className="unorderList">
                <li><a href="tel:77701234567">(7770) 123 4567</a></li>
                <li><a href="tel:77701234567">(7770) 123 4567</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 md-mb-30">
          <div className="address-item style">
            <div className="address-icon"> <i className="bi bi-envelope-fill"></i> </div>
            <div className="address-text">
              <h3 className="contact-title">Mail Us</h3>
              <ul className="unorderList">
                <li><a href="#">info@schoolname.com</a></li>
                <li><a href="#">info@schoolname.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 sm-mb-30">
          <div className="address-item">
            <div className="address-icon"> <i className="bi bi-clock-fill"></i> </div>
            <div className="address-text">
              <h3 className="contact-title">Opening Hours</h3>
              <ul className="unorderList">
                <li>Mon - Fri : 10am to 2pm</li>
                <li>Sat - Sun : Closed</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="address-item">
            <div className="address-icon"> <i className="bi bi-geo-alt-fill"></i> </div>
            <div className="address-text">
              <h3 className="contact-title">Address</h3>
              <p> 123 Lorem ipsum 123, dollor GA 456, Atlanta</p>
            </div>
          </div>
        </div>
      </Row>
    </div>
    <div className="row">
      <div className="col-lg-7"> 

        <div className="login-wrap">
          <div className="contact-info login_box">
            <div className="contact-form loginWrp registerWrp">
              <form id="contactForm" novalidate="">
                <h3>Get In Touch</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" name="name" className="form-control" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" name="name" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" name="phone" className="form-control" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="submit" className="default-btn btn send_btn"> Submit <span></span></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
      </div>
        <div className="col-lg-5">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021674.414950062!2d41.11423519392498!3d42.30298232333148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sGeorgia!5e0!3m2!1sen!2s!4v1545313690667"
          width="100%"
          height="511"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  </Container>
</div>
</section>



{/* <section>
<div className="newsletter-wrap ">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="title">
          <h1>Newsletter</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="col-lg-6">
        <div className="news-info">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" name="search" placeholder="Email Address" />
              <div className="form_icon"><i className="fas fa-envelope"></i></div>
            </div>
            <button className="sigup">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}
   
   </>
  )
}

export default Contact