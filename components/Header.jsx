"use client";

import Image from "next/image";
import styles from "@styles/header.css";
import Link from "next/link";
import CATE_LIST from "@src/api/cateList";
import items_categories from "@src/api/itemsCategories";
import speacial_occassions from "@src/api/specialOccassions";
import { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

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
          {CATE_LIST.map((menu, idx) => {
            if (menu.text === "Items categories") {
              return (
                <>
                  <div
                    key={menu.text}
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    className={`nav-option item-nav ${
                      activeIdx === idx ? "active" : ""
                    }`}
                  >
                    <Link href={menu.url}>{menu.text}</Link>
                    <div className="items-cate">
                      {items_categories.map((item, idx) => {
                        return (
                          <div key={idx} className="item">
                            {item.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            } else if (menu.text === "Special Occassions") {
              return (
                <>
                  <div
                    key={menu.text}
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    className={`nav-option item-nav ${
                      activeIdx === idx ? "active" : ""
                    }`}
                  >
                    <Link href={menu.url}>{menu.text}</Link>
                    <div className="items-cate">
                      {speacial_occassions.map((item, idx) => {
                        return (
                          <div key={idx} className="item">
                            {item.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <div
                  key={menu.text}
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  className={`nav-option ${activeIdx === idx ? "active" : ""}`}
                >
                  <Link href={menu.url}>{menu.text}</Link>
                </div>
              );
            }
          })}
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
              <span className="material-symbols-outlined">call</span>
              0332908528
            </Link>
            <br />
            <Link href="#" className="infor_communication">
              <span className="material-symbols-outlined">mail</span>
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
