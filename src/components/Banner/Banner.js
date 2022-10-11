import React from "react";
import Typed from "react-typed";
import Title from "../../utils/Title";
// import Particles from 'react-particles-js';

const Banner = () => {
  return (
    // <Particles>
    <div className="hero min-h-screen bg-base-200">
      <Title title="Home"></Title>
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-32">
        <img
          alt="Nilima Pic"
          data-aos="fade-left"
          src="https://i.ibb.co/PZ2XcWD/transparent-bg-designify.png"
          className="md:max-w-sm rounded-full shadow-2xl"
        />
        <div data-aos="fade-right" className="md:text-left text-center">
          <h1 className="text-5xl font-bold">
            <Typed
              strings={[
                "Hi,I am Nilima Mim",
                "Hi,I am Google advertising specialist",
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
            <a title="UpWork" href="https://www.upwork.com/freelancers/~014dde0a96a777a17b" target="__blank" className="btn">UpWork</a>
            <a title="Fiverr" href="https://www.fiverr.com/nilimamim508" target="__blank" className="btn bg-green-600 active:bg-green-900 hover:bg-green-800">
              Fiverr
            </a>
          </div>
        </div>
      </div>
    </div>
    // </Particles>
  );
};

export default Banner;
