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
          <img src={customer1} alt="Saswati Mishra" />
          <figcaption>
            <h3>Saswati</h3>
            <p>
              PixelPii Labs is the perfect solution we find for the consultancy and the developement for our startup and I reccomend you to try it out.
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={customer2} alt="Javed Ali" />
          <figcaption>
            <h3>Javed</h3>
            <p>
              PixelPii Labs helped me a lot to reach out our servers on top most in the search engines and improved the quality with excellency in time.
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={customer3} alt="Billy Butcher" />
          <figcaption>
            <h3>Billy</h3>
            <p>
              PixellPii helped a lot in developement and reviewing in the analytcs using the latest advanced marketing analytics and branding the business with latest technology.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Reviews;
