import React from "react";
import AboutBackground from "C:/Users/Lenovo/PycharmProjects/Simelabs_Internship/product/src/Components/Assets/about-background.png";
import AboutBackgroundImage from "C:/Users/Lenovo/PycharmProjects/Simelabs_Internship/product/src/Components/Assets/img2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Elevate Your Style, Elevate Your Shopping.
        </h1>
        <p className="primary-text">
         Elevate your lifestyle with our carefully curated collection that goes beyond fashion.
         </p>
        <p className="primary-text">
          Our e-commerce platform is your gateway to style, quality, and a shopping experience that mirrors your aspirations.
        </p>
        <div className="about-buttons-container">
          <button  className="secondary-button">Learn More</button>
          <button className="watch-video-button">
                  <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;