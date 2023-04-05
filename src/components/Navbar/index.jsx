import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./index.css";
function PrimaryNav() {
  const [user, setUser] = useState("");
  // useEffect(() => {
  //   let x = localStorage.getItem("userName");
  //   setUser(x);
  // }, []);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand variant="danger" as={NavLink} to="">
            JWT
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="home">
                Home
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link className="text-light">{}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PrimaryNav;
