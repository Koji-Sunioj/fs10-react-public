import React from "react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  //states for initialized app. no setstate functions set, since it would
  //re render the app and nav menu would lose defining values
  let display;
  const [isHiddenPanel] = useState(
    window.innerWidth >= 600 ? (display = "block") : (display = "none")
  );
  const [hiddenHamburger] = useState(
    window.innerWidth >= 600 ? (display = "none") : (display = "block")
  );

  //useRef() used to persist nav bar values for visibility
  const nav = useRef();
  const hamburger = useRef();
  const toggled = useRef(false);

  //toggle value if menu clicked, show the nav
  //only runs when menu button is shown
  const showPanel = (event) => {
    function toggleNav(navStyle, toggleBool) {
      nav.current.style.display = navStyle;
      toggled.current = toggleBool;
    }
    event.preventDefault();
    nav.current.style.display === "block"
      ? toggleNav("none", false)
      : toggleNav("block", true);
  };

  //runs when the window is actively resized
  //will toggle visibility of nav and/or menu
  const resetPanel = () => {
    const isOver = window.innerWidth >= 600;
    if (isOver) {
      nav.current.style.display = "block";
      hamburger.current.style.display = "none";
      toggled.current = false;
    } else if (!isOver) {
      hamburger.current.style.display = "block";
      if (!toggled.current) {
        nav.current.style.display = "none";
      }
    }
  };

  //add event listener once, when app is loaded
  //pointing to resize function for nav and menu
  useEffect(() => {
    window.addEventListener("resize", resetPanel);
  }, []);

  return (
    <header className="header">
      <p className="header__logo">
        <a href="#opening">El Niño &copy;</a>
      </p>
      <p id="hamburger" style={{ display: hiddenHamburger }} ref={hamburger}>
        <a href="panel" onClick={showPanel}>
          <i className="fa fa-bars"></i>
        </a>
      </p>
      <nav className="header__nav" style={{ display: isHiddenPanel }} ref={nav}>
        <ul>
          <li>
            <a href="#services-header">Services</a>
          </li>
          <li>
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#feedback">Feedback</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
