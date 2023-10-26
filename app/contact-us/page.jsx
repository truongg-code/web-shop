import React from "react";
import "./contact_us.css";
import Feedback from "@components/Feedback";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <div className="content-contact">
        <h3>CONTACT US</h3>
        <p>
          We love to hear from you and always ready to assist you, If you have
          any query feel Free to contact us via Chat or
        </p>
        <p>Or Call Us</p>
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
      <p className="section-title">What Customers Say About Us</p>
      <Feedback />
    </>
  );
};

export default ContactUs;
