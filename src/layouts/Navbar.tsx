import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function Navbar() {
  const { isLogin } = useContext(LoginContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/app">
              App
            </NavLink>
          </li>
          {isLogin ? (
            <li className="nav-item active">
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </li>
          ) : (
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
