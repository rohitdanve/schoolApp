import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/images/logo.png";

const Header = () => {
  useEffect(() => {
    // CSS files to load
    const cssLinks = [
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css", // Bootstrap Icons CDN
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css", // Bootstrap CDN
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css", // Owl Carousel CDN
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css", // Owl Carousel Theme CDN
      "../../src/assets/css/all.css",
      "../../src/assets/css/settings.css",
      "../../src/assets/css/animate.css",
      "../../src/assets/css/jquery.fancybox.min.css",
      "../../src/assets/css/main.css",
    ];

    // Load CSS files dynamically
    const cssElements = cssLinks.map((href) => {
      const link = document.createElement("link");
      link.href = href;
      link.rel = "stylesheet";
      document.head.appendChild(link);
      return link; // Store reference for cleanup
    });

    // Cleanup function to remove the appended CSS
    return () => {
      cssElements.forEach((link) => {
        document.head.removeChild(link);
      });
    };
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  // Scroll event to handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setIsSticky(scrollValue > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar expand="lg" className={isSticky ? "header-fixed" : "header"}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
