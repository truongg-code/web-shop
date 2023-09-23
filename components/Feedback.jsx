import React from "react";
import Image from "next/image";
import "@styles/feedback.css";

const Feedback = () => {
  return (
    <div id="evaluation">
      <div className="review">
        <blockquote>
          awesome.... really v awesome material thank dream party team... highly
          recommend 😍💕👏
        </blockquote>
      </div>
      <div id="triangle"></div>
      <Image
        src="https://app.testimonialhub.com/resources/public/avatars/15120/1670053737_5826125300782414.jpg"
        alt="Avatar"
        width={70}
        height={70}
        className="avatar"
      ></Image>
    </div>
  );
};

export default Feedback;
