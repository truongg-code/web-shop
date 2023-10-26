"use client";

import { motion, transform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "@styles/carousel_nav.css";
import Link from "next/link";

const menu_carousel = [
  {
    name: "Wedding",
    url: "",
  },
  {
    name: "Theme Foil Balloons",
    url: "",
  },
  {
    name: "Shop All",
    url: "",
  },
  {
    name: "Sashes",
    url: "",
  },
  {
    name: "Religious Occassions",
    url: "",
  },
  {
    name: "Photo Booth Props",
    url: "",
  },
  {
    name: "Party Tableware",
    url: "",
  },
  {
    name: "Party Favor Boxes/Bags",
    url: "",
  },
];

export default function Home() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="inner-carousel"
        >
          {menu_carousel.map((item) => {
            return (
              <motion.div key={item.name} className="item-carousel-container">
                <Link href={item.url} className="item-carousel">
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
          {/* <button
            onClick={() => {
              transformX(50);
            }}
            id="next"
          >
            next
          </button> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
