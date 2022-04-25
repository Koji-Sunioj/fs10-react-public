import { useState, useEffect, useRef } from "react";

const Header = () => {
  const OverSixHundo:boolean = window.innerWidth >= 600;

  const [isHiddenPanel] = useState<string>(OverSixHundo ? "block" : "none");
  const [hiddenHamburger] = useState<string>(OverSixHundo ? "none" : "block");

  const nav = useRef<HTMLElement>(null!);
  const hamburger = useRef<HTMLParagraphElement>(null!);
  const toggled = useRef<boolean>(false);

  const showPanel = (event: any) => {
    function toggleNav( navStyle: string, toggleBool: boolean) {
      nav.current.style.display = navStyle;
      toggled.current = toggleBool;
    }
    event.preventDefault();
    nav.current.style.display === "block"
      ? toggleNav( "none", false)
      : toggleNav( "block", true);
  };

  const resetPanel = () => {
    const isOver: boolean = window.innerWidth >= 600;
    if (isOver) {
      nav.current.style.display = "block";
      hamburger.current.style.display = "none";
      toggled.current = false;
    } else if (!isOver ) {
      hamburger.current.style.display = "block";
      if (!toggled.current) {
        nav.current.style.display = "none";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resetPanel);
  }, []);

  return (
    <header className="header">
      <p className="header__logo">
        <a href="#welcome-to-the-website">El Niño &copy;</a>
      </p>
      <p id="hamburger" style={{ display: hiddenHamburger }} ref={hamburger}>
        <a href="panel" onClick={showPanel}>
          <i className="fa fa-bars"></i>
        </a>
      </p>
      <nav className="header__nav" style={{ display: isHiddenPanel }} ref={nav}>
        <ul>
          <li>
            <a href="#services">Services</a>
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