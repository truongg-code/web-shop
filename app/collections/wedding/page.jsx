"use client";

import React from "react";
import "@app/collections/item_carousel_page.css";
import Image from "next/image";
import { useState } from "react";

const Wedding = () => {
  const [gridCurrent, setGridCurrent] = useState(3);

  return (
    <>
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
            className={`change-grid ${gridCurrent === 1 ? "active" : ""}`}
            onClick={() => {
              setGridCurrent(1);
            }}
          >
            <span className="material-symbols-outlined">view_agenda</span>
          </button>
          <button
            className={`change-grid ${gridCurrent === 2 ? "active" : ""}`}
            onClick={() => {
              setGridCurrent(2);
            }}
          >
            <span className="material-symbols-outlined">view_column_2</span>
          </button>
          <button
            className={`change-grid ${gridCurrent === 3 ? "active" : ""}`}
            onClick={() => {
              setGridCurrent(3);
            }}
          >
            <span className="material-symbols-outlined">view_week</span>
          </button>
          <button
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
        <select name="Filter Fast" id="filter_fast">
          <option>Best Selling</option>
          <option>Featured</option>
        </select>
      </div>

      <div className={`product_list grid_active${gridCurrent}`}>
        <div className={`product_information grid_active${gridCurrent}`}>
          <div className="image-container"></div>
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
          <div className="image-container"></div>
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
          <div className="image-container"></div>
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
          <div className="image-container"></div>
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
          <div className="image-container"></div>
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
          <div className="image-container"></div>
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
