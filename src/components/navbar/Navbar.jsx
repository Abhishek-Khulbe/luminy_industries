import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import photo from "./user-photo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>Stringar</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="user-info">
          <span className="one">
            <h5>John Doe</h5>
            <p>30 points</p>
          </span>
          <span className="two">
            <img src={photo} alt="photo" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
