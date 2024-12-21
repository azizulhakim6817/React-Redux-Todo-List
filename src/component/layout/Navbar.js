import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary shadow">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            className="  w-50"
            src={logo}
            alt="Logo"   
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/TodoDashboardPage"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-light fw-bold "
                    : "nav-link text-white"
                }
                aria-current="page"
                href="#"
              >
                Todo-App
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-light fw-bold "
                    : "nav-link text-white"
                }
                href="#"
              >
                Counter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
