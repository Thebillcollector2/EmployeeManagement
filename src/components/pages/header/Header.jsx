import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Employee Management System</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Employee</Nav.Link>
          <Nav.Link as={Link} to="/employee">Post Employees</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
