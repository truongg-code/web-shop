import React from "react";
import "@styles/product.css";

const Product = () => {
  return (
    <div className="product_information">
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
          Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single Piece
        </h6>
        <p className="price">$50</p>
        <p className="intro_describe">
          •Single Alphabet foil Balloon,16&quot; Inch size.•Select Color and
          write Required Alphabet in box below, Input quantity of Alhpabet
          required•Add to cart new Alphabet again 1 by 1 to add more.
        </p>
      </div>
    </div>
  );
};

export default Product;
