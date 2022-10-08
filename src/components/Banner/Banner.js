import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-32">
        <img
          src="https://i.ibb.co/PZ2XcWD/transparent-bg-designify.png"
          className="max-w-sm rounded-full shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I am Nilima Mim</h1>
          <p className="py-6">
          Hello, my name is Nilima Mim. I work as a professional Freelancer. Google advertising specialist I'm a Certified Google Ads, GA4, and Google Tag Manager expert.
          </p>
          <div className="flex gap-x-5">
            <button className="btn">UpWork</button>
            <button className="btn bg-green-700 active:bg-green-900">Fiverr</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
