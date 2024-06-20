import React from 'react'
import Navbar from "./Navbar"
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";

// import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
      <div id='home' className="home-container" >
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
            Fresh, organic, and locally sourced 
            quality you can taste in every bite
            
            </h1>
            <p className="primary-text">
            Unlock a world of flavors with our diverse range of imported delicacies, bringing distant cuisines to your doorstep
            </p>
            {/* <button className="secondary-button">
              Order Now <FiArrowRight />{" "}
            </button> */}
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
