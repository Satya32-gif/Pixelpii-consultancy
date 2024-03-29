// Importing necessary files
import React, { useContext } from "react";
import { ServiceContext } from "../../../../context/ContextProvider";
import Service from "../Service/Service";
import "./Services.css";

// Main Services Component
const Services = () => {
  //Getting services from service context
  const [services] = useContext(ServiceContext);

  return (
    <div className="services">
      <h1>Choose your desired service</h1>
      <p>
        Discover the world of IT counselling.
        <br />
        Find out how PixelPii counselling can help you with your topic.
      </p>
      <div className="all-services">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
