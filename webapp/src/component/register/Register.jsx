import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userExists: "",
    };
    this.addUser = this.addUser.bind(this);
  }
  addUser = (e) => {
    e.preventDefault();
    var newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(`http://localhost:9000/userservice/api/v1/user`, newUser)
      .then((res) => {
        this.setState({ snkbarMsg: "registered succesfully" });
        window.setTimeout(function () {
          window.location.href = "/footer";
        }, 1000);
      })
      .catch((err) => {
        this.setState({ userExists: "User already exists" });
      });
  };
  render() {
    return (
      <div
        className="mb-3 my-4 row col-lg-3 col-md-3 col-9 col-xxl-3 d-flex justify-content-center align-items-start flex-column 
                border border-white rounded-3 form-prop"
      >
        <form
          className="my-4 mx-auto"
          onSubmit={(e) => {
            this.addUser(e);
          }}
        >
          <h2 className="my-4 title-text">Register</h2>
          <br />
          <div className="row-mb-3">
            <div className="col-sm-15">
              <div className="pass-prop">{this.state.userExists}</div>
              <input
                type="email"
                className="form-control"
                id="email-id"
                placeholder="Enter your Email ID"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />{" "}
              <br />
              <br />
            </div>
          </div>

          <div className="row-mb-3">
            <div className="col-sm-15">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter a password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />{" "}
              {/* <div className="pass-prop">{this.state.passwordValidate}</div> */}
            </div>
          </div>
          <br />
          <br />
          <br />
          <div>
            <button className="button-color" type="submit">
              Register
            </button>{" "}
            <br />
            <br />
          </div>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={this.state.snkbarMsg}
          autoHideDuration={1000}
          onClose={(x) => this.setState({ snkbarMsg: "" })}
          message={this.state.snkbarMsg}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={(x) => this.setState({ snkbarMsg: "" })}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}
