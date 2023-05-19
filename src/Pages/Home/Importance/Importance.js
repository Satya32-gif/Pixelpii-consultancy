// Importing necessary files
import React from "react";
import aboutImage from "../../../assets/about-img.jpg";
import "./Importance.css";

// Main Importance Component
const Importance = () => {
  return (
    <div className="importance">
      <h1>About Us</h1>
      <div className="about-content">
        <img src={aboutImage} alt="Importance" />
        <p>
          Our management consulting services focus on our client's most critical issues and opportunities : Strategy,
          Marketing, Organization, Operations, Technology, Transformation, Advanced analytics, Corporate Finance, Mergers & Acquisitions 
          along with the sustainability, almost across all the industries. We bring deep, functional expertise, but are also known for our
          holistic perspective.
        
          We capture value across boundaries and between the silos of any organization.
          We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.
          
          We believe in growing together along with our client's for a long range success to create and buid a strong bond relationship of our client with PixelPii.
        </p>
      </div>
    </div>
  );
};

export default Importance;
