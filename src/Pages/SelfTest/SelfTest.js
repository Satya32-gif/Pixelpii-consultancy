// Imporing necessary files
import React from "react";
import "./SelfTest.css";

// Main Self Test Component
const SelfTest = () => {
  return (
    <div className="self-test">
      <h1>Careers at PixelPii</h1>
      <p>
      We are Hiring for several positions. Fill out the form to get in touch with one of our Hiring Manager 😊
      </p>
      <div className="test-selection">
        <select name="tests">
          <option value="developer">
            Apply as a Web Developer at PixelPii
          </option>
          <option value="seo">
            Apply as a SEO developer at PixelPii
          </option>
          <option value="content-writer">
            Apply as a Content writer at PixelPii
          </option>
          <option value="designer">
            Apply as a Graphics Designer at PixelPii
          </option>
          <option value="marketing">
            Apply as a Marketing Executive at PixelPii
          </option>
        </select>
        <button className="btn btn-header">Apply Now</button>
      </div>
    </div>
  );
};

export default SelfTest;
