import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <ul>
        <li>
          <Link to="/Search">Search</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    );
  };
  
  export default Navbar;