import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";
import banner_1 from "../../assets/images/banner/banner-1.jpg";
import banner_2 from "../../assets/images/banner/banner-2.jpg";
import scholarship from "../../assets/images/scholarship.png";
import support from "../../assets/images/support.png";
import book from "../../assets/images/book.png";
import teacher from "../../assets/images/teacher.png";

const Home = () => {
  return (
    <>
      <section className=" banner_section ">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src={banner_1} className="img-fluid w-100" />
            <div class="carousel-caption">
              <h2> International School </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="py-3">
                <a href="#"> Enroll Today</a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={banner_2} className="img-fluid w-100" />
            <div class="carousel-caption">
              <h2> Education Bright Future </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="py-3">
                <a href="#"> Enroll Today</a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
      <section>
        <div className="our-course-categories-two ">
          <Container>
            <div className="categories_wrap">
              <ul className="row unorderList">
                <li className="col-lg-3 col-md-6">
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        {" "}
                        <span className="coure-icon-inner">
                          {" "}
                          <img src={teacher} alt="" />{" "}
                        </span>{" "}
                      </div>
                      <div className="cours-title">
                        <h4>Expert teachers</h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                          nibh dolor gravida at eleifend
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-lg-3 col-md-6">
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        {" "}
                        <span className="coure-icon-inner">
                          {" "}
                          <img src={book} alt="" />{" "}
                        </span>{" "}
                      </div>
                      <div className="cours-title">
                        <h4>Quality Education</h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                          nibh dolor gravida at eleifend
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-lg-3 col-md-6">
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        {" "}
                        <span className="coure-icon-inner">
                          {" "}
                          <img src={support} alt="" />{" "}
                        </span>{" "}
                      </div>
                      <div className="cours-title">
                        <h4>Life Time Support</h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                          nibh dolor gravida at eleifend
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-lg-3 col-md-6">
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        {" "}
                        <span className="coure-icon-inner">
                          {" "}
                          <img src={scholarship} alt="" />{" "}
                        </span>{" "}
                      </div>
                      <div className="cours-title">
                        <h4>Scholarship News</h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                          nibh dolor gravida at eleifend
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Container>
        </div>
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
