import React from "react";

const Header = () => {
  return (
    <header className="header">
      <p className="header__logo">
        <a href="index.html">El Niño &copy;</a>{" "}
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
