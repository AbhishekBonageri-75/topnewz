import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

function Header(props) {
  return (
    <Navbar className="navbar-custom " variant="light">
      <Navbar.Brand href="/dashboard">
        <svg
          id="brand-img"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="white"
          className="bi bi-newspaper"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
          <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
        </svg>
        <div className="brand-txt">| TopNewz</div>
      </Navbar.Brand>
      {props.showSearch?
      <form className="d-flex" onSubmit={props.handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn nav-btn" type="submit">
          Search
        </button>
      </form> : null }
      <div className="collapse navbar-collapse" id="navbarNav"></div>

      {localStorage.getItem("email") && localStorage.getItem("token") ? (
        <div className="d-flex">
          <div id="user-txt">
            {" "}
            Welcome,{" "}
            {localStorage.getItem("email").split("@")[0][0].toUpperCase() +
              localStorage.getItem("email").split("@")[0].slice(1)}{" "}
          </div>
          {/* <div id="user-txt">Welcome, test12</div> */}
          <div className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
            </div>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/profile">
                Profile
              </a>
              <a className="dropdown-item" href="/favorites">
                Favorites
              </a>
              <hr className="dropdown-divider"></hr>
              <a
                className="dropdown-item"
                href="/footer"
                onClick={props.handleLogout}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      ) : (
        <a className="nav-link" href="/footer">
          Login/Register
        </a>
      )}
    </Navbar>
  );
}
export default Header;
