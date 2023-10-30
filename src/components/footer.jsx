import React from "react";
import ilablogo from "../assets/logo-ilab.png";
import fb from "../assets/logo-facebook.png";
import ig from "../assets/logo-instagram.png";
import twt from "../assets/logo-twitter.png";
function Footer() {
  return (
    <>
      <div className="row align-content-center p-5">
        <div className="col-5 d-flex justify-content-center p-5 text-center">
          <figure className="figure">
            <img src={ilablogo} width="100%" alt="ilab" />
            <figcaption className="figure-caption pt-5">
              Copyright © 2022 Infinite Learning
            </figcaption>
          </figure>
        </div>
        <div className="col-3">
          <p className="fw-bold" style={{ color: "rgb(227, 203, 174)" }}>
            Services
          </p>
          <p>Email Marketing</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className="col-2">
          <p className="fw-bold" style={{ color: "rgb(227, 203, 174)" }}>
            About
          </p>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
        <div className="col-2">
          <p className="fw-bold" style={{ color: "rgb(227, 203, 174)" }}>
            Follow Us
          </p>
          <p>
            <img
              src={fb}
              width="10%"
              style={{ paddingRight: "10px" }}
              alt="Facebook"
            />
            Facebook
          </p>
          <p>
            <img
              src={twt}
              width="13%"
              style={{ paddingRight: "10px" }}
              alt="Twitter"
            />
            Twitter
          </p>
          <p>
            <img
              src={ig}
              width="10%"
              style={{ paddingRight: "10px" }}
              alt="Instagram"
            />
            Instagram
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
