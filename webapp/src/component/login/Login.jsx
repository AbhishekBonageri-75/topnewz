import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      invalidCredentials: "",
      data: [],
    };
  }

  handleSubmitClick = (e) => {
    e.preventDefault();
    const checkUser = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("User data", checkUser);
    axios
      .post(`http://localhost:9000/userservice/api/v1/login/`, checkUser)
      .then((res) => {
        this.setState({ data: res.data });
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("token", res.data.token);
        this.setState({ invalidCredentials: "" });
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        this.setState({ invalidCredentials: "Invalid Credentials" });
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
            this.handleSubmitClick(e);
          }}
        >
          <h2 className="my-4 title-text">Login</h2>
          <div className="invalid-credentials">
            {this.state.invalidCredentials}
          </div>
          <br />
          <br />
          <div className="row-mb-3">
            <div className="col-sm-15">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
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
                id="inputPassword3"
                placeholder="Enter password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />
              <br />
              <br />
              <br />
            </div>
          </div>
          <div>
            <button className="button-color" type="submit">
              Login
            </button>
          </div>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
