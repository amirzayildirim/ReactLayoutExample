import React from "react";
import { NavLink } from "react-router-dom";

function AuthrError() {
  return (
    <div className="bg-dark row">
      <div
        className="col-md-12 text-center"
        style={{ height: "100vh", color: "white" }}
      >
        <br />
        <h1>403</h1>
        <h4>Forbidden Page</h4>
        <hr style={{ backgroundColor: "gray" }} />
        <NavLink to={"/login"} className={"btn btn-danger"}>
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default AuthrError;
