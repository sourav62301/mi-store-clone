import React from "react";
import "../styles/Navbar.css";
// import { Link } from "react-router-dom";

// import data from "../data/data.json";
// console.log(data.logo);

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const logo = (
  <svg class="logo__mi" viewBox="0 0 112 112" version="1.1">
    <g fill="#ff6900">
      <path d="M100.326,11.702 C89.76,1.176 74.566,0 56,0 C37.41,0 22.194,1.19 11.632,11.744 C1.072,22.294 0,37.486 0,56.054 C0,74.626 1.072,89.822 11.636,100.376 C22.198,110.932 37.412,112 56,112 C74.588,112 89.8,110.932 100.362,100.376 C110.926,89.82 112,74.626 112,56.054 C112,37.462 110.914,22.254 100.326,11.702 L100.326,11.702 Z"></path>
    </g>
    <g fill="#ffffff">
      <path
        class="logo__home"
        d="M57.8054292,26.743366 L57.931608,26.8782679 L81.3680343,53.7784796 C82.7703315,55.3874915 81.6885448,57.872013 79.5991142,57.9952335 L79.4364262,58 L76,58 L76,71.3345882 C76,75.0164706 72.9809524,78 69.2552381,78 L42.7447619,78 C39.0190476,78 36,75.0164706 36,71.3345882 L36,58 L32.5635738,58 C30.4234399,58 29.2530924,55.5557037 30.5289714,53.903922 L30.6319657,53.7784796 L54.068392,26.8782679 C55.0457355,25.754085 56.766743,25.7091177 57.8054292,26.743366 Z M200.6006,34.56 C200.9866,34.56 201.3066,34.87 201.3066,35.252 L201.3066,76.754 C201.3066,77.13 200.9866,77.442 200.6006,77.442 L191.5066,77.442 C191.1166,77.442 190.8006,77.13 190.8006,76.754 L190.8006,35.252 C190.8006,34.87 191.1166,34.56 191.5066,34.56 L200.6006,34.56 Z M161.1406,34.56 C168.0006,34.56 175.1726,34.874 178.7086,38.414 C182.188558,41.897875 182.564028,48.8333125 182.578162,55.5684076 L182.5786,76.754 C182.5786,77.13 182.2626,77.442 181.8726,77.442 L172.7826,77.442 C172.3926,77.442 172.0746,77.13 172.0746,76.754 L172.0746,55.204 C172.0646,51.442 171.8486,47.576 169.9086,45.63 C168.2386,43.956 165.1226,43.572 161.8826,43.492 L145.4026,43.492 C145.0146,43.492 144.6986,43.804 144.6986,44.18 L144.6986,76.754 C144.6986,77.13 144.3786,77.442 143.9906,77.442 L134.8926,77.442 C134.5046,77.442 134.1906,77.13 134.1906,76.754 L134.1906,35.252 C134.1906,34.87 134.5046,34.56 134.8926,34.56 L161.1406,34.56 Z M163.1766,51.088 C163.5626,51.088 163.8766,51.398 163.8766,51.776 L163.8766,76.754 C163.8766,77.13 163.5626,77.442 163.1766,77.442 L153.6246,77.442 C153.2326,77.442 152.9166,77.13 152.9166,76.754 L152.9166,51.776 C152.9166,51.398 153.2326,51.088 153.6246,51.088 L163.1766,51.088 Z M59.2999404,54 L52.6952892,54 C51.2597451,54 50.0896172,55.1942589 50.0049103,56.6981405 L50,56.872989 L50,63.127011 C50,64.6534011 51.1169596,65.9041929 52.530874,65.9947504 L52.6952892,66 L59.2999404,66 C60.7354844,66 61.910036,64.8057411 61.9950706,63.3018595 L62,63.127011 L62,56.872989 C62,55.2878916 60.7906977,54 59.2999404,54 Z"
      ></path>
    </g>
  </svg>
);

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/" id="logoImage">
          {/* <img id="logoImage" src={data.logo} alt="." /> */}
          {logo}
        </a>
      </div>
      <a href="/miphones" className="navlinks">
        Mi Phones
      </a>
      <a href="/redmiphones" className="navlinks">
        Redmi Phones
      </a>
      <a href="/tv" className="navlinks">
        TV
      </a>
      <a href="/laptops" className="navlinks">
        Laptops
      </a>
      <a href="/lifestyle" className="navlinks">
        Fitness & Lifestyle
      </a>
      <a href="/home" className="navlinks">
        Home
      </a>
      <a href="/audio" className="navlinks">
        Radio
      </a>
      <a href="/accessories" className="navlinks">
        Accessories
      </a>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
}

export default Navbar;
