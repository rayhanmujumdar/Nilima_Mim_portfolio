import React, { useEffect, useState } from "react";
import useServiceData from "../../Hooks/useServiceData";

import ServiceCard from "./ServiceCard";
const Service = () => {
  const [serviceData] = useServiceData()

  return (
    <div className="flex flex-col justify-center items-center gap-y-10 my-10">
        {
            serviceData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
        }
      
    </div>
  );
};

export default Service;
