import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "dark" : "light"} bg-${props.mode === "dark" ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={props.toggleMode}
                />

                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                    backgroundColor:
                      props.mode === "light" ? "#f8f9fa" : "#212529",
                  }}
                >
                  Enable {props.mode === "dark" ? "light" : "dark"} Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};
