import React from "react";
import img from "../../../assets/images/banner/4.jpg";

const SharedBanner = () => {
  return (
    <div
      className="h-64 w-full bg-cover bg-center relative rounded-xl "
      style={{
        backgroundImage: `url(${img})`, // Use the imported image dynamically
      }}
    >
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
        <h2 className="absolute top-1/2 left-10 text-white text-4xl font-bold">
          Service Details
        </h2>
        <div className="bg-[#FF3811] text-white absolute left-[40%] bottom-0 rounded-t-xl">
          <p className="px-4 pt-1">Home/Service Details</p>
          {/* Add content inside the trapezoid if needed */}
        </div>
      </div>
    </div>
  );
};

export default SharedBanner;
