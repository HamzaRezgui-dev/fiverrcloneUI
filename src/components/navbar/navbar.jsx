import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          <button>Sign in</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>test</span>
        <span>test</span>
        <span>test</span>
      </div>
    </div>
  );
};

export default Navbar;
