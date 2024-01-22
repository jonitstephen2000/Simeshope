import React from "react";
import Logo from "C:/Users/Lenovo/PycharmProjects/Simelabs_Internship/product/src/Components/Assets/logo1.8.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Address (Head Office) : </span>
          <span>Simelabs Shope Pvt. Ltd. </span>
          <span>World Unit no. 305 & 306, </span>
          <span>Trade Center-Tower A, Infopark </span>
          <span>phase 1 SEZ, Infopark P.O, </span>
          <span>Kakkanad, Kochi 682042 </span>
          <span>simelabsshope@gmail.com </span>
        </div>
        <div className="footer-section-columns">
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="about-search-box-container" style={{position:"fixed",bottom:"35px",marginRight:"-19px"}}>
            <form className="search-box" action="" method style={{marginLeft:"1150px"}}>

        <button className="watch-video-button" type="button" name="button">Speak Out to Search
         <BsMicFill />
        </button>
      </form>

        </div>
        <div>
        <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Copyright @ SimeShope
        </span>
        </div>
    </div>

  );
};

export default Footer;
