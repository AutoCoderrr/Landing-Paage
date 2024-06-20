import React from "react";
// import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="contact">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}
          <div className="footerlogobb">   <a href="">BB FOODS</a></div>
        </div>
        <div className="footer-icons">
          <a  href="https://www.youtube.com/"><BsTwitter /></a> 
          {/* <a  ><BsTwitter /></a>  */}
          {/* <SiLinkedin /> */}
          {/* <a href="">Whats app</a> */}
         <a href="https://www.youtube.com/user/bhushan8289?app=desktop"> <BsYoutube /></a>
          <FaFacebookF />
         <a href="https://wa.me/919503636172?text=Hello%20%0AHow%20are%20you%20doing%20?%0A"><RiWhatsappFill /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        
        </div>
        <div>
        {/* <a href="tel:9011433198"><img src="" alt="Call 9011433198" /></a> */}
        </div>
        <div className="footer-section-columns">
          <span  alt="Call 9011433198"  ><IoCall /> call:- 9011433198</span>
          
          <span> Email--bbfood.iceland@gmail.com</span>
          <span> Terms & Conditions</span>
          <span> Privacy Policy</span>
        </div>
        <br></br>
          <br></br>
          <br></br>
        <div className="footer-section-columns">
          {/* <span> -   Terms & Conditions</span>
          <span> -     Privacy Policy</span> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;