import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
export default class Navi extends Component {
  render() {
    return (
      <>
        <Navbar className="h-80" bg="dark" variant="dark">
          <Navbar.Brand> <Link to={"/"}> Covid 19</Link> </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link> <Link className="gray-link" to={"/news"}> News</Link> </Nav.Link>
            <Nav.Link> <Link className="gray-link" to={"/charts"}> Charts</Link> </Nav.Link>
            <Nav.Link> <Link className="gray-link" to={"/tables"}> Tables</Link> </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}
