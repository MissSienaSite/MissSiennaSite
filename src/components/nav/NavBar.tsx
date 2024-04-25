import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="white" variant="light" expand="md" className="m-auto">
      <Navbar.Brand href="/" className="mx-auto">
        <img src="/logo.jpg" style={{ height: "170px" }} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-4">
          <Nav.Link href="/" style={{ color: "black" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/Boat" style={{ color: "black" }}>
            About Us
          </Nav.Link>
          <Nav.Link href="/Charters" style={{ color: "black" }}>
            Charters We Offer
          </Nav.Link>
          <Nav.Link href="/Trips" style={{ color: "black" }}>
            Recent trips
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
