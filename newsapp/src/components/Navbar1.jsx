/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";

function Navbar1({ setCategory, setSearchTerm }) {
  const [active, setActive] = useState();

  function clickEvent(id) {
    setActive(id);
  }

  const links = [
    { id: 1, name: "About", value: "/About" },
    { id: 2, name: "News", value: "/News" },
    { id: 3, name: "Contact", value: "/Contact" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <Navbar fixed="" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo (1).png" alt="" width="150" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <Link
                to={link.value}
                key={link.id}
                className={`text-decoration-none p-2 ${
                  active === link.id ? "text-dark" : "text-secondary"
                }`}
                onClick={() => clickEvent(link.id)}
              >
                {link.name}
              </Link>
            ))}
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex">
            <FormControl
              type="text"
              placeholder="search..."
              className="me-2 outline-dark"
              name="search"
            />
            <Button variant="outline-dark" type="submit">
              Search.
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
