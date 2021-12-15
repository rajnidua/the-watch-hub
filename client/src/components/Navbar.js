import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

import { Link } from "react-router-dom";
import Auth from "../utils/auth.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBasket,
  faShoppingCart,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            T<span>he</span>Watch<span>hub</span>
          </Link>
        </div>
        <ul className={click ? "menu active" : "menu"}>
          <li>
            <Link to="/" className="menu-btn">
              Search Watchhub
            </Link>
          </li>

          {Auth.loggedIn() ? (
            <>
              <li>
                <Link to="/saved" className="menu-btn">
                  Saved WatchList
                </Link>
              </li>

              <li>
                <Link onClick={Auth.logout} className="menu-btn btn log-in-nav">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Login" className="menu-btn btn log-in-nav">
                  LogIn
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="menu-btn" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faWindowClose} className="menu-btn" />
          ) : (
            // <MenuIcon className="menu-icon" />
            <FontAwesomeIcon icon={faBars} className="menu-btn" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
