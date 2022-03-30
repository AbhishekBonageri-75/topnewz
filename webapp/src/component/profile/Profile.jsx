import React, { Component } from "react";
import axios from "axios";
import Header from "../header/Header";
import "./style.css";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      incorrectPassword: "",
      mismatch: "",
      email: localStorage.getItem("email"),
      checkPassword: "",
      data: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:9000/userservice/api/v1/${this.state.email}`)
      .then((res) => {
        this.setState({ data: res.data });
        this.setState({ checkPassword: res.data.password });
        var editPassword = {
          email: this.state.email,
          password: this.state.newPassword,
        };
        if (this.state.checkPassword === this.state.oldPassword) {
          if (this.state.confirmPassword === this.state.newPassword) {
            axios
              .put(
                `http://localhost:9000/userservice/api/v1/user`,
                editPassword
              )
              .then((res) => {
                this.setState({ snkbarMsg: "password edit succesful" });
                window.setTimeout(function () {
                  window.location.href = "/profile";
                }, 1000);
              });
          } else {
            this.setState({incorrectPassword : ""})
            this.setState({ mismatch: "Password mismatch" });
          }
        } else {
          this.setState({ incorrectPassword: "Incorrect password" });
        }
      });
  };

  render() {
    return (
      <div>
        <div>
          <Header
            isLoggedIn={this.state.isLoggedIn}
            handleLogout={this.handleLogout}
            handleSearch={this.handleSearch}
          />
          <div className="card mb-3 card-prop1">
            <div className="row g-0">
              <div className="col-md-4 icon-prop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 
                                6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 
                                1.418-.832 1.664h10z"
                  />
                </svg>
                <div>
                  <h3>{this.state.email} </h3>
                </div>
              </div>
              <div className="col-md-8">
                <div>
                  <div
                    className="mb-3 my-4 row col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-end align-items-start flex-column 
                                form-pr"
                  >
                    <form
                      className="my-4 mx-auto"
                      onSubmit={(e) => {
                        this.handleSubmit(e);
                      }}
                    >
                      <h2 className="title-text">Change Password</h2>
                      <br />
                      <div className="row-mb-3">
                        <div className="col-sm-15">
                          <div className="message-prop">
                            {this.state.incorrectPassword}
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword1"
                            placeholder="Enter old password"
                            value={this.state.oldPassword}
                            onChange={(e) =>
                              this.setState({ oldPassword: e.target.value })
                            }
                            required
                          />
                          <br />
                          <br />
                        </div>
                      </div>
                      <div className="row-mb-3">
                        <div className="col-sm-15">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword2"
                            placeholder="Enter new password"
                            value={this.state.newPassword}
                            onChange={(e) =>
                              this.setState({ newPassword: e.target.value })
                            }
                            required
                          />
                          <br />
                          <br />
                        </div>
                      </div>
                      <div className="row-mb-3">
                        <div className="col-sm-15">
                          <div className="message-prop1">
                            {this.state.mismatch}
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Re-enter new password"
                            value={this.state.confirmPassword}
                            onChange={(e) =>
                              this.setState({ confirmPassword: e.target.value })
                            }
                            required
                          />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                      <div>
                        <button className="button-color" type="submit">
                          Submit
                        </button>
                      </div>
                      <br />
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
