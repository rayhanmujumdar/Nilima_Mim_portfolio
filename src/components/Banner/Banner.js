import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-32">
        <img
          data-aos="fade-left"
          src="https://i.ibb.co/PZ2XcWD/transparent-bg-designify.png"
          className="md:max-w-sm rounded-full shadow-2xl"
        />
        <div data-aos="fade-right" className="md:text-left text-center">
          <h1 className="text-5xl font-bold">
            <Typed
              strings={[
                "I am Nilima Mim",
                "I am Google advertising specialist",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h1>
          <p className="py-6">
            Hello, my name is I work as a professional Freelancer. Google
            advertising specialist I'm a Certified Google Ads, GA4, and Google
            Tag Manager expert.
          </p>
          <div className="flex gap-x-5 justify-center md:justify-start">
            <button className="btn">UpWork</button>
            <button className="btn bg-green-700 active:bg-green-900 hover:bg-green-800">
              Fiverr
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
