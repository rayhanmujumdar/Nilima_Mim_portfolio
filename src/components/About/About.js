import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Title from "../../utils/Title";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Title title="About"></Title>
      <div className="hero-content flex-col lg:flex-row md:gap-x-16">
        <img
          alt="nilima pic"
          data-aos="fade-left"
          src="https://i.ibb.co/PZ2XcWD/transparent-bg-designify.png"
          className="md:max-w-sm rounded-full shadow-lg"
        />
        <div className="" data-aos="fade-right">
          <h4 className="text-2xl flex items-center gap-x-2">
            <span>
              <UserCircleIcon className="h-7 w-7 text-yellow-300"></UserCircleIcon>
            </span>
            About Me
          </h4>
          <p className="py-6">
            Hello, my name is Nilima Mim. I work as a professional Freelancer.
            Google advertising specialist I'm a Certified Google Ads, GA4, and
            Google Tag Manager expert
          </p>
          <p>
            I worked with multinational corporations, assisting hundreds of
            online and offline businesses in the development and implementation
            of online marketing strategies, campaign management, and data
            analytics. My goals are high quality, quick service, and good
            communication. Please knock on my door now.
          </p>
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/18-yYDuh72bbnRsyKCWNyMD1GzOAJtTV5/view?usp=sharing"
              target="__blank"
              className="btn btn-active"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
