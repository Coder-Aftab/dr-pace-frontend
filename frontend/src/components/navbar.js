import React from "react";
import { Link} from 'react-router-dom';

import '../css/navbar.css'

const Navbar = () => {


  return (
    <div className="headContainer">
      <Link className="link" to="/">
      <div className="logo">
        Dr.Pace
        </div>
        </Link>
      <div className="signup">
        <Link to="/login">
          <button className="navButton">Sign-up/Sign-in</button>
        </Link>
    </div>
    </div>
  )
}
export default Navbar;