import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/react.png";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            style={{ height: "35px", verticalAlign: "top" }}
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  RouteOpedia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/crypto/detail/BTC/10">
                  Crypto Detail
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  y
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/product">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/list">
                      Product list
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/details">
                      Product details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/create">
                      Product create
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
