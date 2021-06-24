    import React, { Component } from 'react';&#xD;&#xA;    import MenuIcon from '@material-ui/icons/Menu';&#xD;&#xA;    import M from 'materialize-css/dist/js/materialize.min.js';&#xD;&#xA;    import 'materialize-css/dist/css/materialize.min.css';&#xD;&#xA;    class Navbar extends Component {&#xD;&#xA;      componentDidMount() {&#xD;&#xA;        document.addEventListener('DOMContentLoaded', () => {&#xD;&#xA;          const elems = document.querySelectorAll('.side-nav');&#xD;&#xA;          const instances = M.Sidenav.init(elems);&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;      render() {&#xD;&#xA;        return (&#xD;&#xA;          <React.Fragment>&#xD;&#xA;            <div className="navbar-fixed">&#xD;&#xA;              <nav className="teal">&#xD;&#xA;                <div className="container">&#xD;&#xA;                  <div className="nav-wrapper">&#xD;&#xA;                    <a href="#home" className="brand-logo white-text">Travellizers</a>&#xD;&#xA;                    <a href="#!" data-target="mobile-nav" className="button-collapse hide-on-md-and-up">&#xD;&#xA;                      <MenuIcon />&#xD;&#xA;                    </a>&#xD;&#xA;                    <ul className="right hide-on-med-and-down">&#xD;&#xA;                      <li><a href="#home">Home</a></li>&#xD;&#xA;                      <li><a href="#search">Search</a></li>&#xD;&#xA;                      <li><a href="#popular">Popular places</a></li>&#xD;&#xA;                      <li><a href="#about">about</a></li>&#xD;&#xA;                    </ul>&#xD;&#xA;                  </div>&#xD;&#xA;                </div>&#xD;&#xA;              </nav>&#xD;&#xA;              <ul className="side-nav" id="mobile-nav">&#xD;&#xA;                <li><a href="#home">Home</a></li>&#xD;&#xA;                <li><a href="#search">Search</a></li>&#xD;&#xA;                <li><a href="#popular">Popular places</a></li>&#xD;&#xA;                <li><a href="#about">about</a></li>&#xD;&#xA;                <li><a href="#contact">contact</a></li>&#xD;&#xA;              </ul>&#xD;&#xA;            </div>&#xD;&#xA;          </React.Fragment>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    export default Navbar;