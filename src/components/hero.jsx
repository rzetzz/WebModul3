import React from "react";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <div className="container-fluid align-content-center">
      <div className="row"></div>
      <img src={hero} className="img-fluid" alt="Hero" />
      <div class="text-over text-light">
        <h1>Selamat Datang</h1>
        <h6>di website Praktikum Pemrograman Website</h6>
      </div>
    </div>
  );
}

export default Hero;
