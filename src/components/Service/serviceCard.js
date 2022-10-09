import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl md:w-[1000px] mx-4">
        <figure>
          <img src={service.img} alt="Album" className="md:w-[500px] w-[350px] rounded-md"/>
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-3xl">{service.serviceName.toUpperCase()}</h2>
          <p className="whitespace-normal">{service.serviceDetails}</p>
          <div className="card-actions md:justify-end justify-center">
            <Link to={`/service/${service._id}`} className="btn btn-primary">More Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
