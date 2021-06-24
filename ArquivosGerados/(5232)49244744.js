    import React, { Component } from 'react';&#xD;&#xA;    import {Navbar, Nav, NavItem } from 'react-bootstrap';&#xD;&#xA;    import {Link} from 'react-router-dom';&#xD;&#xA;    export default class CustomNavbar extends Component {&#xD;&#xA;      render() {&#xD;&#xA;        return (&#xD;&#xA;          <Navbar default collapseOnSelect>&#xD;&#xA;            <Navbar.Header>&#xD;&#xA;              <Navbar.Brand>&#xD;&#xA;                <Link to="/">Hello</Link>&#xD;&#xA;              </Navbar.Brand>&#xD;&#xA;              <Navbar.Toggle />&#xD;&#xA;            </Navbar.Header>&#xD;&#xA;            <Navbar.Collapse>&#xD;&#xA;              <Nav pullRight>&#xD;&#xA;                <NavItem eventKey={1} componentClass={Link} to="/" >&#xD;&#xA;                  Home&#xD;&#xA;                </NavItem>&#xD;&#xA;                <NavItem eventKey={2} componentClass={Link} to="/about" >&#xD;&#xA;                  About&#xD;&#xA;                </NavItem>&#xD;&#xA;                <NavItem eventKey={3} componentClass={Link} to="/news" >&#xD;&#xA;                  News&#xD;&#xA;                </NavItem>&#xD;&#xA;              </Nav>&#xD;&#xA;            </Navbar.Collapse>&#xD;&#xA;          </Navbar>&#xD;&#xA;          &#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }