"use client";

import Image from "next/image";
import styles from "@styles/header.css";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="header">
      <div className="nav-bar">
        <span
          className="material-symbols-outlined"
          onClick={() => setNavActive(true)}
        >
          menu
        </span>
      </div>
      <div className="header-desktop">
        <Image
          src="https://dreamparty.pk/cdn/shop/files/Logo.jpg?v=1668790297&width=190"
          alt="Logo shop"
          width={50}
          height={50}
          className="logo-shop"
        />

        <div className={`nav-bar-desktop ${navActive ? "active" : ""}`}>
          <p id="menu">Menu</p>
          <div className="nav-option">
            <Link href="#">Home</Link>
          </div>
          <div className="nav-option">
            <Link href="#">Shop All</Link>
          </div>
          <div className="nav-option">
            <Link href="#">Special Occassions</Link>
          </div>
          <div className="nav-option">
            <Link href="#">Items categories</Link>
          </div>
          <div className="nav-option">
            <Link href="#">Instructions</Link>
          </div>
          <div className="nav-option">
            <Link href="#">Contact Us / Reviews</Link>
          </div>
          <div className="nav-option add-option">
            <Link href="#">
              <span className="material-symbols-outlined">search</span>
              Search
            </Link>
          </div>
          <div className="nav-option add-option">
            <Link href="#">
              <span className="material-symbols-outlined">person</span>
              Login / Register
            </Link>
          </div>
          <div className="need-help">
            <p>Need help?</p>
            <Link href="#" className="infor_communication">
              <span class="material-symbols-outlined">call</span>
              0332908528
            </Link>
            <br />
            <Link href="#" className="infor_communication">
              <span class="material-symbols-outlined">mail</span>
              infor@dreamparty.pk
            </Link>
          </div>
        </div>
        <div
          className={`btn-close ${navActive ? "active" : ""}`}
          onClick={() => {
            setNavActive(false);
          }}
        >
          Close
        </div>
      </div>

      <div className="symbols">
        <span className="material-symbols-outlined" id="search-icon">
          search
        </span>
        <div className="header-form">
          <select className="option-cate">
            <option>All Categories</option>
          </select>
          <div className="search-space">
            <input
              type="text"
              placeholder="Search for product"
              id="search-header-form"
            />
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>

        <span className="material-symbols-outlined" id="account">
          person
        </span>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </div>
  );
};

export default Header;
