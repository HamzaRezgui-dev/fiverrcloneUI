import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [Open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "Hamza",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!Open)}>
              <img
                src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
                alt="angular"
              />
              <span>{currentUser?.userName}</span>
              {Open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="">
              Graphics & Design
            </Link>
            <Link className="link" to="">
              Video & Animation
            </Link>
            <Link className="link" to="">
              Writing & Translation
            </Link>
            <Link className="link" to="">
              AI Services
            </Link>
            <Link className="link" to="">
              Digital Marketing
            </Link>
            <Link className="link" to="">
              Music & Audio
            </Link>
            <Link className="link" to="">
              Programming & Tech
            </Link>
            <Link className="link" to="">
              Business
            </Link>
            <Link className="link" to="">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
