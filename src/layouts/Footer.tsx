import React from "react";

function Footer() {
  return (
    <div className="row fixed-bottom">
      <div
        className="col-md-12 bg-dark"
        style={{
          minHeight: "100px",
          marginTop: "20px",
          color: "white",
        }}
      >
        <center> &copy; React Layout Example Footer</center>
      </div>
    </div>
  );
}

export default Footer;
