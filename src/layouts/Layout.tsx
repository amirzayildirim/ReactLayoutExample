import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-md-12">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
