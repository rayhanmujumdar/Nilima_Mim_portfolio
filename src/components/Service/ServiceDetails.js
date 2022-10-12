import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServiceData from "../../Hooks/useServiceData";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [serviceData] = useServiceData();
  useEffect(() => {
    const data = serviceData.find((item) => {
      return item._id === id;
    });
    setService(data);
  }, [id, serviceData]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container flex lg:gap-x-5 lg:flex-row flex-col bg-[#191D24] items-start mx-auto rounded-md p-5 my-2">
        <div className="flex flex-col justify-center items-start gap-y-4">
          <div data-aos="fade-down-right">
            <img
              src={service?.img}
              alt=""
              className="lg:max-w-3xl rounded-md"
            />
          </div>
          <div data-aos="fade-up" className="max-w-3xl">
            <h4 className="text-5xl my-3 text-gray-300">
              {service?.serviceName?.toUpperCase()}
            </h4>
            <p className="text-gray-300">{service?.serviceDetails}</p>
          </div>
          
        </div>
        <div  data-aos="fade-down-left" className="flex justify-start lg:items-center flex-col">
        <div data-aos="fade-up" className="max-w-5xl">
            <h1 className="text-5xl inline-block mb-4 before:w-full relative before:h-[5px] text-gray-300 before:bg-red-500 before:absolute before:bottom-[-10px]">
                Skills
            </h1>
            {service?.skills?.map((skill, index) => {
              return (
                <p key={index} className="py-1 text-xl text-gray-300">
                  {index + 1}. {skill}
                </p>
              );
            })}
          </div>
          <div className="w-full">
            <h1 className="text-5xl inline-block mb-4 before:w-full relative before:h-[5px] text-gray-300 before:bg-red-500 before:absolute before:bottom-[-10px]">
              Services
            </h1>
            <div>
              {service?.myService?.map((service, index) => {
                return (
                  <p key={index} className="text-xl text-gray-300 flex items-center gap-x-2 py-1.5">
                    <span className="inline-block bg-green-700 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>{" "}
                    {service}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
