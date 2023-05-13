// Importing necessary files
import React from "react";
import { useHistory } from "react-router";
import "./SingleService.css";

// Main Single Service Component
const SingleService = (props) => {
  //Getting data from props
  const { serviceName, serviceLongDesc, serviceImage, specialistName } =
    props.serv;

  //Function for back button
  const history = useHistory();
  const handleBackBtn = () => {
    history.push("/");
  };

  return (
    <div className="single-service">
      <section>
        <img src={serviceImage} alt={serviceName} />
      </section>
      <section>
        <h1 className="service-title">{serviceName} Related Counsultation</h1>
        <p className="service-desc">{serviceLongDesc}</p>
        <p className="service-specialist">Specialist: {specialistName}</p>
        <button onClick={handleBackBtn} className="btn btn-header">
          Back to home
        </button>
      </section>
    </div>
  );
};

export default SingleService;
