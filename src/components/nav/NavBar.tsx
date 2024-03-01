import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" variant="light" expand="md">
      <Navbar.Brand href="/">
        <p>LOGO GOES HERE</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-4">
          <Nav.Link href="/" style={{ color: "black" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/Boat" style={{ color: "black" }}>
            The Boat
          </Nav.Link>
          <Nav.Link href="/Charters" style={{ color: "black" }}>
            Charters
          </Nav.Link>
          <Nav.Link href="/Trips" style={{ color: "black" }}>
            Trips
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;