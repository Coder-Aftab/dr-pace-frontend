import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

import '../css/navbar.css'

const Navbar = () => {


  return (
    <div className="headContainer">
      <div className="logo">
        Dr.Pace
      </div>
      <div className="signup">
        <Link to="/login">
          <button>Signup/Login</button>
          </Link>
    </div>
    </div>
  )
}
export default Navbar;