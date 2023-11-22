import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./product_page.css";
import Product from "@components/Product";

const ProductPage = () => {
  return (
    <>
      <div className="path_url">
        <div className="nav_path">
          <nav>
            <Link href="/" id="link-navpath">
              Home
            </Link>
            {"  "}
            &gt;
            <Link href="/" id="link-navpath">
              Wedding
            </Link>
            {"  "}
            &gt; Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
            Piece
          </nav>
        </div>
        <div className="backCate_Page">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="material-symbols-outlined">navigate_next</span>
        </div>
      </div>
      <div className="information_product">
        <div className="image-product">
          <div className="image-detail-item">
            <Image
              src="https://dreamparty.pk/cdn/shop/products/Foil-Alphabets.jpg?v=1661501386&width=120"
              alt="Image Detail"
              id="image_detail"
              height={80}
              width={80}
            />
            <Image
              src="https://dreamparty.pk/cdn/shop/products/Foil-Name-Set.jpg?v=1661501387&width=120"
              alt="Image Detail"
              id="image_detail"
              height={80}
              width={80}
            />
          </div>
          <Image
            src="https://dreamparty.pk/cdn/shop/products/Foil-Alphabets.jpg?v=1661501386&width=700"
            alt="Image Main"
            id="image_main"
            height={500}
            width={500}
          />
        </div>
        <div className="product_detail">
          <h3 className="name-product">
            Alphabets Foil Balloon / Custom Banner - 16&quot; Inch - Single
            Piece
          </h3>
          <p id="price">$50</p>
          <ul className="describe">
            <li>Single Alphabet foil Balloon,16&quot; Inch size.</li>
            <li>
              Select Color and write Required Alphabet in box below, Input
              quantity of Alhpabet required
            </li>
            <li>Add to cart new Alphabet again 1 by 1 to add more.</li>
          </ul>
          <div className="btn-order">
            <div className="quantity">
              <button id="decrease">-</button>
              <input min={1} max={999} value="1" step={1} />

              <button id="increase">+</button>
            </div>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
          <div className="more-detail">
            <p>More detail:</p>
            <p id="infor_more">
              ➣To Inflate - Use the plastic straw and inflate the air. When the
              inflation is completed take out the straw and the balloons seals
              automaticaly. Keep balloons away from fire. Easy to deflate with
              inserting plastic straw to deflate for reuse.
            </p>
          </div>
        </div>
      </div>

      <div className="may-like">
        <h3>You may also like</h3>
        <div className="product_list">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div className="recent-view may-like">
        <h3>Recent viewed products</h3>
        <div className="product_list">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
