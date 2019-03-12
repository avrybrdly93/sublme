import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul className="nav">
    <li className="nav-item nav-link">
      <b>Pick your music:</b>
    </li>
    <li className="nav-item">
      <Link
        to="/App"
        className={
          window.location.pathname === "/App" ? "nav-link active" : "nav-link"
        }
      >
        Music Data Search
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/youtube"
        className={
          window.location.pathname === "/youtube"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Youtube videos
      </Link>
    </li>
  </ul>
);

export default Navbar;
