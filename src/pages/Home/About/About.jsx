import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg" />
          <img
            src={parts}
            className="w-1/2 absolute right-8 border-8 border-[#FFFFFF] top-1/2 rounded-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#FF3811] pb-2">About Us</h3>
          <h1 className="text-5xl font-bold pb-4">
            We are qualified & of experience in this field
          </h1>
          <p className="py-4 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="pb-4 text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn text-white bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
