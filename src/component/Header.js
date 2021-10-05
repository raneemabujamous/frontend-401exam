import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/fav">faveroite</Nav.Link>
              <Nav.Link href="/profile">profile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
