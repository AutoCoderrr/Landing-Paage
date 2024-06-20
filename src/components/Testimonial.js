import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        I stumbled upon this food website while searching for new recipes, and I'm so glad I did! The recipes are not only delicious but also easy to follow. I've tried several dishes, and each one has been a hit with my family. This website has truly elevated my cooking game
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        As a food enthusiast, I'm always on the lookout for unique ingredients and culinary inspiration. This website has become my go-to destination for both. The articles are informative, the recipes are mouthwatering, and the product recommendations are spot-on. It's like having a foodie friend guiding me through my culinary adventures
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Danny</h2>
      </div>
    </div>
  );
};

export default Testimonial;