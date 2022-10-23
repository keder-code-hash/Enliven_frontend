import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/logo/navbar-logo.png";

function Header() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container1">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <NavLink
                to=""
                className="nav-links"
                onClick={() => setClick(!click)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/testing"
                className="nav-links"
                onClick={() => setClick(!click)}
              >
                General Testing
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={() => setClick(!click)}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/signup"
                className="nav-links"
                onClick={() => setClick(!click)}
              >
                Sign Up &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/login"
                className="nav-links"
                onClick={() => setClick(!click)}
              >
                Login &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
          <div className="menu-btn" onClick={() => setClick(!click)}>
            <i
              className={click ? "fa-solid fa-bars active" : "fa-solid fa-bars"}
              id="menubar"
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
