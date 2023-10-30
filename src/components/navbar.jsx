import React from "react";
import { Link } from "react-router-dom";
import ilablogo from "../assets/logo-ilab.png";
import "../style.css";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ms-5 me-5">
        <div class="logo ">
          <a href="#">
            <img src={ilablogo} width="60%" alt="ilab" />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav w-100 d-flex justify-content-end">
            <Link to="/" className="nav-link me-2">
              Home
            </Link>
            <Link to="/about" className="nav-link me-2">
              About Us
            </Link>
            <Link to="/contact" className="nav-link me-2">
              Contact Us
            </Link>
          </div>
          <div class="button w-100 d-flex justify-content-lg-end justify-content-sm-start">
            <button className="btn btn-outline-dark btn-log border border-black border-2">
              SIGN UP
            </button>
            <button type="button" class="btn btn-primary btn-log border">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
