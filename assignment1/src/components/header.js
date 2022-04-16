import React from "react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  let display;
  const [isHiddenPanel] = useState(
    window.innerWidth >= 600 ? (display = "block") : (display = "none")
  );
  const [hiddenHamburger] = useState(
    window.innerWidth >= 600 ? (display = "none") : (display = "block")
  );
  const nav = useRef();
  const hamburger = useRef();
  const toggled = useRef(false);

  function showPanel(event) {
    event.preventDefault();
    if (nav.current.style.display === "block") {
      nav.current.style.display = "none";
      toggled.current = false;
    } else if (nav.current.style.display === "none") {
      nav.current.style.display = "block";
      toggled.current = true;
    }
  }

  function resetPanel() {
    if (window.innerWidth >= 600) {
      nav.current.style.display = "block";
      hamburger.current.style.display = "none";
      toggled.current = false;
    } else if (window.innerWidth < 600) {
      hamburger.current.style.display = "block";
      if (!toggled.current) {
        nav.current.style.display = "none";
      }
    }
  }

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
