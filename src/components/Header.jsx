import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo  from "../../src/assets/images/logo.png";


const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 50 ? setIsSticky(true):setIsSticky(false);
      
  };
  window.addEventListener("scroll",handleScroll)


  return (
   <header>
     <Navbar expand="lg" className={`${isSticky===true ? "header-fixed": "header" }`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Link>
          <img src={Logo} alt="Logo"  />
          </Link>
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
