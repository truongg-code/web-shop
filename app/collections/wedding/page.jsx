"use client";

import React from "react";
import "@app/collections/item_carousel_page.css";
import CarouselNav from "@components/CarouselNav";
import Image from "next/image";
import { useState } from "react";

const Wedding = () => {
  const [gridCurrent, setGridCurrent] = useState(1);

  return (
    <>
      <CarouselNav />
      <div className="name-item-page">
        <h2>Wedding</h2>
      </div>

      <div className="feature">
        <div className="filter">
          <span className="material-symbols-outlined">tune</span>
          Filter
        </div>
        <div className="grid-view-container">
          <button
            id="grid_1"
            className={`change-grid ${gridCurrent === 1 ? "active" : ""}`}
            onClick={() => {
              setGridCurrent(1);
            }}
          >
            <span className="material-symbols-outlined">view_agenda</span>
          </button>
          <button
            id="grid_2"
            className={`change-grid ${gridCurrent === 2 ? "active" : ""}`}
            onClick={() => {
              setGridCurrent(2);
            }}
          >
            <span className="material-symbols-outlined">view_column_2</span>
          </button>
          <button
            id="grid_3"
            className={`change-grid ${gridCurrent === 3 ? "active" : ""}`}
            onClick={() => {
              setGridCurrent(3);
            }}
          >
            <span className="material-symbols-outlined">view_week</span>
          </button>
          <button
            id="grid_4"
            className={`change-grid ${gridCurrent === 4 ? "active" : ""}`}
            onClick={() => {
              setGridCurrent(4);
            }}
          >
            <span className="material-symbols-outlined">
              calendar_view_week
            </span>
          </button>
        </div>
        {/* <select name="Filter Fast" id="filter_fast">
          <option>Best Selling</option>
          <option>Featured</option>
        </select> */}

        <div className="filter_fast">
          <p>Best Selling</p>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        <div className="sort">
          Sort
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>

      <div className={`product_list grid_active${gridCurrent}`}>
        <div className={`product_information grid_active${gridCurrent}`}>
          <div className="image-container">
            <div className="btn_quick">
              <button className="quick_view">
                <p>Quick view</p>
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="quick_shop">
                <p>Quick Shop</p>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
          <div className="intro_production">
            <h6 className="product_name">
              Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
              Piece
            </h6>
            <p className="price">$50</p>
            <p className="intro_describe">
              •Single Alphabet foil Balloon,16&quot; Inch size.•Select Color and
              write Required Alphabet in box below, Input quantity of Alhpabet
              required•Add to cart new Alphabet again 1 by 1 to add more.
            </p>
          </div>
        </div>

        <div className={`product_information grid_active${gridCurrent}`}>
          <div className="image-container">
            <div className="btn_quick">
              <button className="quick_view">
                <p>Quick view</p>
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="quick_shop">
                <p>Quick Shop</p>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
          <div className="intro_production">
            <h6 className="product_name">
              Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
              Piece
            </h6>
            <p className="price">$50</p>
            <p className="intro_describe">
              •Single Alphabet foil Balloon,16&quot; Inch size.•Select Color and
              write Required Alphabet in box below, Input quantity of Alhpabet
              required•Add to cart new Alphabet again 1 by 1 to add more.
            </p>
          </div>
        </div>

        <div className={`product_information grid_active${gridCurrent}`}>
          <div className="image-container">
            <div className="btn_quick">
              <button className="quick_view">
                <p>Quick view</p>
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="quick_shop">
                <p>Quick Shop</p>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
          <div className="intro_production">
            <h6 className="product_name">
              Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
              Piece
            </h6>
            <p className="price">$50</p>
            <p className="intro_describe">
              •Single Alphabet foil Balloon,16&quot; Inch size.•Select Color and
              write Required Alphabet in box below, Input quantity of Alhpabet
              required•Add to cart new Alphabet again 1 by 1 to add more.
            </p>
          </div>
        </div>

        <div className={`product_information grid_active${gridCurrent}`}>
          <div className="image-container">
            <div className="btn_quick">
              <button className="quick_view">
                <p>Quick view</p>
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="quick_shop">
                <p>Quick Shop</p>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
          <div className="intro_production">
            <h6 className="product_name">
              Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
              Piece
            </h6>
            <p className="price">$50</p>
            <p className="intro_describe">
              •Single Alphabet foil Balloon,16&quot; Inch size.•Select Color and
              write Required Alphabet in box below, Input quantity of Alhpabet
              required•Add to cart new Alphabet again 1 by 1 to add more.
            </p>
          </div>
        </div>

        <div className={`product_information grid_active${gridCurrent}`}>
          <div className="image-container">
            <div className="btn_quick">
              <button className="quick_view">
                <p>Quick view</p>
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="quick_shop">
                <p>Quick Shop</p>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
          <div className="intro_production">
            <h6 className="product_name">
              Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
              Piece
            </h6>
            <p className="price">$50</p>
            <p className="intro_describe">
              •Single Alphabet foil Balloon,16&quot; Inch size.•Select Color and
              write Required Alphabet in box below, Input quantity of Alhpabet
              required•Add to cart new Alphabet again 1 by 1 to add more.
            </p>
          </div>
        </div>

        <div className={`product_information grid_active${gridCurrent}`}>
          <div className="image-container">
            <div className="btn_quick">
              <button className="quick_view">
                <p>Quick view</p>
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="quick_shop">
                <p>Quick Shop</p>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
          <div className="intro_production">
            <h6 className="product_name">
              Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
              Piece
            </h6>
            <p className="price">$50</p>
            <p className="intro_describe">
              •Single Alphabet foil Balloon,16&quot; Inch size.•Select Color and
              write Required Alphabet in box below, Input quantity of Alhpabet
              required•Add to cart new Alphabet again 1 by 1 to add more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wedding;
