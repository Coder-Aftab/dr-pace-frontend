import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../css/dashboard.css";
import Home from "./home";
const DashBoard = () => {
  return (
    <div className="container">
      <Navbar className="navbar"></Navbar>
        <Home className="Home"></Home>

      <Footer className="footer"></Footer>

    </div>
  )
}


export default DashBoard;