import React from "react";
import Navbar from "./navbar";
import "../css/dashboard.css";
import Home from "./home";
const DashBoard = () => {
  return (
    <div className="container">
      <Navbar className="navbar"></Navbar>
      <Home className="Home"></Home>
    </div>
  )
}


export default DashBoard;