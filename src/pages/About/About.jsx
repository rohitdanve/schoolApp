import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../../assets/images/banner/aboutImg.png";
import academy from "../../assets/images/academy.png";
import education from "../../assets/images/education.png";
import classimg from "../../assets/images/class.png";
import gallery_1 from "../../assets/images/gallery/gallery-1.jpg";
import gallery_2 from "../../assets/images/gallery/gallery-2.jpg";
import gallery_3 from "../../assets/images/gallery/gallery-3.jpg";
import gallery_4 from "../../assets/images/gallery/gallery-4.jpg";
import gallery_5 from "../../assets/images/gallery/gallery-5.jpg";
import gallery_6 from "../../assets/images/gallery/gallery-6.jpg";
import phone_icon from "../../assets/images/phone_icon.png";
import teacher_1 from "../../assets/images/teachers/teacher_1.jpg";
import teacher_2 from "../../assets/images/teachers/teacher_2.jpg";
import teacher_3 from "../../assets/images/teachers/teacher_3.jpg";
import teacher_4 from "../../assets/images/teachers/teacher_4.jpg";


function About() {
  return (
    <>
      <section>
        <div className="innerHeading-wrap">
          <Container>
            <h1>About Us</h1>
          </Container>
        </div>
      </section>

      <section>
        <div className="about-wrap " id="about">
          <Container>
            <Row>
              <div className="col-lg-7">
                <div className="aboutImg">
                  <img src={aboutImg} alt="" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_box">
                  <div className="title">
                    <h1>
                      Online Learing <span>PLatform</span>
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus nibh dolor, gravida faucibus dolor consectetur,
                    pulvinar rhoncus risus. Fusce vel rutrum mi.
                  </p>
                  <ul className="edu_list">
                    <li>
                      <div className="learing-wrp">
                        <div className="edu_icon">
                          <img src={education} />
                        </div>
                        <div className="learn_info">
                          <h3>Special Education</h3>
                          <p>
                            Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                            nibh dolor gravida at eleifend
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="learing-wrp">
                        <div className="edu_icon">
                          <img src={classimg} />
                        </div>
                        <div className="learn_info">
                          <h3>Honors classNamees</h3>
                          <p>
                            Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                            nibh dolor gravida at eleifend
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="learing-wrp">
                        <div className="edu_icon">
                          <img src={academy} />
                        </div>
                        <div className="learn_info">
                          <h3>Traditional academies</h3>
                          <p>
                            Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                            nibh dolor gravida at eleifend
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <div className="gallery-wrap ">
          <Container>
            <Row>
              <div className="col-lg-3">
                <div className="gallery_box">
                  <div className="gallery_left">
                    <div className="title">
                      <h1>Photo Gallery</h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh
                      dolor, gravida faucibus dolor consectetur.
                    </p>
                    <div className="readmore">
                      <a href="#">View All Gallery</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="galleryImg">
                      <img src={gallery_1} alt="" />
                      <div className="portfolio-overley">
                        <div className="content">
                          <a
                            href={gallery_1}
                            className="fancybox image-link"
                            data-fancybox="images"
                            title="Image Caption Here"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="galleryImg">
                      <img src={gallery_2} alt="" />
                      <div className="portfolio-overley">
                        <div className="content">
                          <a
                            href={gallery_2}
                            className="fancybox image-link"
                            data-fancybox="images"
                            title="Image Caption Here"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="galleryImg">
                      <img src={gallery_3} alt="" />
                      <div className="portfolio-overley">
                        <div className="content">
                          <a
                            href={gallery_3}
                            className="fancybox image-link"
                            data-fancybox="images"
                            title="Image Caption Here"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="galleryImg">
                      <img src={gallery_4} alt="" />
                      <div className="portfolio-overley">
                        <div className="content">
                          <a
                            href={gallery_4}
                            className="fancybox image-link"
                            data-fancybox="images"
                            title="Image Caption Here"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="galleryImg">
                      <img src={gallery_5} alt="" />
                      <div className="portfolio-overley">
                        <div className="content">
                          <a
                            href={gallery_5}
                            className="fancybox image-link"
                            data-fancybox="images"
                            title="Image Caption Here"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="galleryImg">
                      <img src={gallery_6} alt="" />
                      <div className="portfolio-overley">
                        <div className="content">
                          <a
                            href={gallery_6}
                            className="fancybox image-link"
                            data-fancybox="images"
                            title="Image Caption Here"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <div className="testimonials-wrap ">
        <div className="container">
          <div className="title">
            <p>Testimoinials</p>
            <h1> What Parents Say </h1>
          </div>
          <ul  className=" owl-carousel unorderList owl-theme" {...testimonials_list}>
            <li className="item">
              <div className="testimonials_sec">
                <div className="client_box">
                  {/* <div className="clientImg">
                    <img alt="" src={testimonials_1} />
                  </div> */}
                  <ul className="unorderList starWrp">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Phasellus
                  porttitor leo id tortor cursus, a gravida sem feugiat.
                  Maecenas nisl libero, lobortis id hendrerit sed, fermentum ut
                  nunc. Duis condimentum tincidunt posuere.
                </p>
                <h3>
                  David Malan <span>Aliquam sodales</span>
                </h3>
                <div className="quote_icon">
                  <i className="bi bi-quote"></i>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testimonials_sec">
                <div className="client_box">
                  <ul className="unorderList starWrp">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Phasellus
                  porttitor leo id tortor cursus, a gravida sem feugiat.
                  Maecenas nisl libero, lobortis id hendrerit sed, fermentum ut
                  nunc. Duis condimentum tincidunt posuere.
                </p>
                <h3>
                  David Malan <span>Aliquam sodales</span>
                </h3>
                <div className="quote_icon">
                  <i className="bi bi-quote"></i>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testimonials_sec">
                <div className="client_box">
                  <ul className="unorderList starWrp">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Phasellus
                  porttitor leo id tortor cursus, a gravida sem feugiat.
                  Maecenas nisl libero, lobortis id hendrerit sed, fermentum ut
                  nunc. Duis condimentum tincidunt posuere.
                </p>
                <h3>
                  David Malan <span>Aliquam sodales</span>
                </h3>
                <div className="quote_icon">
                  <i className="bi bi-quote"></i>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testimonials_sec">
                <div className="client_box">
                  <ul className="unorderList starWrp">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit. Phasellus
                  porttitor leo id tortor cursus, a gravida sem feugiat.
                  Maecenas nisl libero, lobortis id hendrerit sed, fermentum ut
                  nunc. Duis condimentum tincidunt posuere.
                </p>
                <h3>
                  David Malan <span>Aliquam sodales</span>
                </h3>
                <div className="quote_icon">
                  <i className="bi bi-quote"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <section>
        <div className="choice-wrap enroll-wrap ">
          <div className="container">
            <div className="title">
              <h1>Call To Enroll Your Child</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              eleifend est. Donec dictum at diam ut finibus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Class aptent taciti sociosqu ad litora torquent.
            </p>
            <div className="phonewrp">
              <img src={phone_icon} />
              <a href="#">(770) 132 4657</a>
            </div>
          </div>
        </div>
      </section>

      <section class="teachers-area-three teacher-wrap pt-100 pb-70">
  <div class="container">
    <div class="title center_title">
      <h1>Our Teachers</h1>
    </div>
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div class="single-teachers">
          <div class="teacherImg"><img src={teacher_1} className="img-fluid w-100" alt="Image" />
            <ul class="social-icons list-inline">
             
              <li class="social-facebook"> <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a> </li>
              <li class="social-twitter"> <a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a> </li>
              <li class="social-linkedin"> <a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a> </li>
              <li class="social-googleplus"> <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a> </li>
            </ul>
          </div>
          <div class="teachers-content">
            <h3>Stella Roffin</h3>
            <div class="designation">Art teacher</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="single-teachers">
          <div class="teacherImg"> <img src={teacher_2} className="img-fluid w-100" alt="Image" />
            <ul class="social-icons list-inline">
             
              <li class="social-facebook"> <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a> </li>
              <li class="social-twitter"> <a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a> </li>
              <li class="social-linkedin"> <a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a> </li>
              <li class="social-googleplus"> <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a> </li>
            </ul>
          </div>
          <div class="teachers-content">
            <h3>Chris Miller</h3>
            <div class="designation">Mathematic</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="single-teachers">
          <div class="teacherImg"> <img src={teacher_3} className="img-fluid w-100" alt="Image" />
            <ul class="social-icons list-inline">
             
              <li class="social-facebook"> <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a> </li>
              <li class="social-twitter"> <a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a> </li>
              <li class="social-linkedin"> <a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a> </li>
              <li class="social-googleplus"> <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a> </li>
            </ul>
          </div>
          <div class="teachers-content">
            <h3>Jesica Matt</h3>
            <div class="designation">English Teacher</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="single-teachers">
          <div class="teacherImg"> <img src={teacher_4} className="img-fluid w-100" alt="Image" />
            <ul class="social-icons list-inline">
             
              <li class="social-facebook"> <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a> </li>
              <li class="social-twitter"> <a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a> </li>
              <li class="social-linkedin"> <a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a> </li>
              <li class="social-googleplus"> <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a> </li>
            </ul>
          </div>
          <div class="teachers-content">
            <h3>Lena Bodie</h3>
            <div class="designation">Science Teacher</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default About;
const testimonials_list = {   
  loop: true,
  rewind: true,
  margin: 30,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    700: {
      items: 1,
      nav: false,
    },
    900: {
      items: 2,
      nav: false,
    },
    1170: {
      items: 2,
      nav: true,
    },
  }
}