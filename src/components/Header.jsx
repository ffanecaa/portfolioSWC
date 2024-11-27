

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { linklist } from "../assets/data";

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Import menu and close icons

const handleScroll = (e, link) => {
  e.preventDefault();
  const target = document.querySelector(link);
  if (target) {
    const offset = -80; // Espacio deseado
    const y = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
   
   
      <header className={`header-area header-absolute ${isSticky ? "sticky" : ""}`}>
        <div className="container flexSB">
          <div className="logo-box">
            <NavLink to="/">
              <img src="../images/dode.png" alt="logo" />
            </NavLink>
          </div>

          <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.text}
                      
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flexSB">
            <div className="header-button">
              <NavLink to="/" className="btn tj-btn-primary">
                Hire me!
              </NavLink>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <IoCloseOutline size={55} /> : <IoMenuOutline size={55} />}
            </div>
          </div>
        </div>
      </header>
  
  );
};