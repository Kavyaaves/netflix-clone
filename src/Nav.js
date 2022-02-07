import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarBlack(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </nav>
  );
}

export default Nav;
