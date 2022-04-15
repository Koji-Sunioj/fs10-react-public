import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isHiddenPanel, setPanelHidden] = useState(false);
  function test(event) {
    event.preventDefault();
    console.log(event);
    console.log(window.outerWidth);
  }

  /* useEffect(() => {
    console.log("asd");
  }, [window.outerWidth < 600]);*/

  return (
    <header className="header">
      <p className="header__logo">
        <a href="#opening">El Niño &copy;</a>
      </p>
      <p id="hamburger">
        <a href="panel" onClick={test}>
          <i class="fa fa-bars"></i>
        </a>
      </p>
      <nav className="header__nav">
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
