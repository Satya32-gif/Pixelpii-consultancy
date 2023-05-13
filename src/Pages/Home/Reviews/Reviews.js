// Imporing necessary files
import React from "react";
import customer1 from "../../../assets/customer-1.JPG";
import customer2 from "../../../assets/customer-2.JPG";
import customer3 from "../../../assets/customer-3.JPG";
import "./Reviews.css";

// Importing Reviews Component
const Reviews = () => {
  return (
    <div className="reviews">
      <h1>Our Satisfied Customer Says...</h1>

      {/* Customer Reviews */}
      <div className="user-review">
        <figure>
          <img src={customer1} alt="Susana Kenny" />
          <figcaption>
            <h3>Saswati</h3>
            <p>
              Your cusomer reviews will be displayed here.
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={customer2} alt="John Bowlby" />
          <figcaption>
            <h3>Javed</h3>
            <p>
              Reviews goes here.
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={customer3} alt="Billy Butcher" />
          <figcaption>
            <h3>Billy</h3>
            <p>
              Review goes here.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Reviews;
