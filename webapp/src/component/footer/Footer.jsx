import React from "react";
import styles from "../footer/style.css";
import { Jumbotron, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import LandingHeader from "../header/LandingHeader";

const Footer = () => {
  return (
    <React.Fragment>
      <LandingHeader />
      <div className="video">
        <br />
        <br />

        <Jumbotron>
          <h1>Get the latest news Videos</h1>
          <br />
          <div className="App">
            <h3>Live News</h3>
            <br></br>
            <div
              className="video"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ReactPlayer url="https://www.youtube.com/watch?v=BHsirsBX8xU" />
            </div>
          </div>
        </Jumbotron>
      </div>
      <br></br>
      <br></br>
      <div className="cards" style={{ backgroundColor: "#27324C" }}>
        <Jumbotron>
          <br />
          <br />
          <h1
            style={{
              color: "white",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Embrace New #Features
          </h1>
          <br />

          <ul>
            <li>
              {" "}
              <Card
                style={{
                  borderRadius: "25px",
                  width: "18rem",
                  backgroundColor: "#222C44",
                  borderBlock: "grey",
                  borderColor: "white",
                  marginBottom: "60px",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h2>Business </h2>
                  </Card.Title>
                  <Card.Text className="p">
                    Track the business news around the globe -Discover national
                    and international news on Sports
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
            <li>
              {" "}
              <Card
                style={{
                  borderRadius: "25px",
                  width: "18rem",
                  backgroundColor: "#222C44",
                  borderBlock: "grey",
                  borderColor: "white",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h2>Sports </h2>
                  </Card.Title>
                  <Card.Text className="p">
                    Track the Sports news around the globe -Discover national
                    and international news on Sports
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
            <li>
              {" "}
              <Card
                style={{
                  borderRadius: "25px",
                  width: "18rem",
                  backgroundColor: "#222C44",
                  borderBlock: "grey",
                  borderColor: "white",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h2>Technology </h2>
                  </Card.Title>
                  <Card.Text className="p">
                    Track the technology news around the globe -Discover
                    national and international news on Sports
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          </ul>
        </Jumbotron>
      </div>
      <div
        className="foot"
        style={{
          paddingLeft: "35rem",
          height: "10rem",
        }}
      >
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "20px" }}
        >
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-newspaper"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                </svg>
                {"             "}TopNewz!
              </h4>
              <ul className="list-unstyled">
                <li>
                  <p>&copy; TopNewz! - All Rights Reserved</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Social Media</h4>
              <ul className="list-unstyled">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  {"        "} Twitter
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  {"    "} Facebook
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
