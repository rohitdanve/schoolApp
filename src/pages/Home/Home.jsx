import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../../../src/assets/images/banner.jpg";

const Home = () => {
  return (
    <>
      <section className=" banner_section ">
        <Container>
          <Row>
            <Col md={6} sm={12} xs={12} className="order-lg-1 order-2">
              <div className="pt-5 ">
                <h4>Welcome Edunity online courses</h4>
                <h2>Achieving Your Dreams Through Education</h2>
                <p>
                  "Welcome to [School Name], where education meets excellence!
                  Our school is dedicated to fostering a nurturing and
                  innovative learning environment for students from kindergarten
                  through 12th grade."
                </p>
                <a href="" className="btn button_class">
                  Contact Now
                </a>
              </div>
            </Col>
            <Col lg="6" xs={12} md={6} className="p-0 order-lg-2 order-1">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                  <img src={banner} className="img-fluid w-100" />
                </div>
                <div className="item">
                  <img src={banner} className="img-fluid w-100" />
                </div>
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-warning">
      <div className="scrolling-text-container">
      <div className="scrolling-text">
          <marquee>
            "Latest Updates and Announcements from [School Name]", "Stay Informed
            with [School Name] News", "News & Highlights: What's Happening at
            [School Name]", "Your Source for [School Name] News and Events",
            "Catch the Latest Buzz at [School Name]"
          </marquee>
        </div>
        </div>
      </section>
      <section className="">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div></div>
            </Col>
            <Col lg="6">
              <div>
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

const options = {
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};
