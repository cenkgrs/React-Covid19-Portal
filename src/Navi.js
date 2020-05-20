import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./nav.css";
import {GiHealthNormal} from "react-icons/gi";


export default class Navi extends Component {
  render() {
    return (
      <>
        <Navbar className="nav-bg" bg="dark" variant="dark">
          <GiHealthNormal className="pull-right" style={{color:"#0072ff7d"}} size={30} />
           <Link className="navbar-header" to={"/"}> Covid 19</Link> 
          <Nav className="mr-auto">
            <Link className="navigation-link" to={"/news"}> News</Link> 
            <Link className="navigation-link" to={"/charts"}> Charts</Link>
            <Link className="navigation-link" to={"/tables"}> All World</Link>
            <Link className="navigation-link" to={"/about"}> About Coronavirus</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}
