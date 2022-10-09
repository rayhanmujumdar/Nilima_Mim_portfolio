import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServiceData from "../../Hooks/useServiceData";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [serviceData] = useServiceData();
  console.log(serviceData);
  useEffect(() => {
    const data = serviceData.find((item) => {
      return item._id === id;
    });
    setService(data);
  }, [id, serviceData]);
  console.log(service?.img);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container flex lg:gap-x-5 lg:flex-row flex-col bg-[#191D24] mx-auto rounded-md p-5">
        <div className="flex flex-col justify-center items-start gap-y-4">
          <div data-aos="fade-down-right">
            <img
              src={service?.img}
              alt=""
              className="lg:max-w-3xl rounded-md"
            />
          </div>
          <div data-aos="fade-up" className="max-w-3xl">
            <h4 className="text-5xl my-3">
              {service?.serviceName?.toUpperCase()}
            </h4>
            <p>{service?.serviceDetails}</p>
          </div>
          <div data-aos="fade-up" className="max-w-5xl">
            <h1 className="text-5xl inline-block mb-4 before:w-full relative before:h-[5px] before:bg-red-500 before:absolute before:bottom-[-10px]">
                Skills
            </h1>
            {service?.skills?.map((skill, index) => {
              return (
                <p key={index} className="py-1 text-xl">
                  {index + 1}. {skill}
                </p>
              );
            })}
          </div>
        </div>
        <div  data-aos="fade-down-left" className="flex justify-start items-center flex-col">
          <div className="w-full">
            <h1 className="text-5xl inline-block mb-4 before:w-full relative before:h-[5px] before:bg-red-500 before:absolute before:bottom-[-10px]">
              Services
            </h1>
            <div>
              {service?.myService?.map((service, index) => {
                return (
                  <p key={index} className="text-xl flex items-center gap-x-2 py-1.5">
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
