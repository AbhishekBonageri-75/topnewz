import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import { Jumbotron, Button, Carousel, Card, Badge } from "react-bootstrap";
import styles from "../footer/style.css";
import "./style.css";

export default class LandingHeader extends Component {
  render() {
    return (
      <div className="bg-color">
        <Router>
          <Navbar className="navbar-custom" variant="dark">
            <Navbar.Brand href="/dashboard">
              <svg
                id="brand-img"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#41e0fd"
                className="bi bi-newspaper"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
              </svg>{" "}
              <div className="brand-txt"> | TopNewz </div>
            </Navbar.Brand>

            <div className="collapse navbar-collapse" id="navbarNav"></div>
            <Link to="/footer" className="link-color" id="login-padding">
              Login
            </Link>
            <Link to="/registerLand" className="link-color">
              Register
            </Link>
          </Navbar>
          <div className="d-flex flex-row form-position">
            <Switch>
              <Route path="/footer">
                <Login />
              </Route>
              <Route path="/registerLand">
                <Register />
              </Route>
            </Switch>{" "}
            <div className="jumbo1">
              <Jumbotron>
                <h1>TopNewz!</h1>
                <p>Get your daily newz updates from Topnewz.com</p>
                <br></br>
                <hr />
                <br></br>
                <br></br>
                <h2>
                  Get your daily dose of news by
                  <span className="badge badge-warning">
                    <u>category</u>
                  </span>{" "}
                </h2>
              </Jumbotron>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
