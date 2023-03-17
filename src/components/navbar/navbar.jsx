import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [Open, setOpen] = useState(false);
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
    <div className={active ? "navbar active" : "navbar"}>
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
                      <span>Gigs</span>
                      <span>Add new gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test</span>
            <span>test</span>
            <span>test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
