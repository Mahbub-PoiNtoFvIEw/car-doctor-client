import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({service}) => {
    const {title, img, price, description, facility} = service;
  return (
      <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
        <figure className="px-4 pt-4">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-52 w-full"
          />
        </figure>
        <div className="card-body py-4 pl-4 font-bold">
          <h2 className="card-title text-[#444444]">{title}</h2>
          <p className="text-[#FF3811] flex justify-between items-center">Price : ${price} <span className="btn btn-circle bg-white border-none text-[#FF3811] text-xl"><FaArrowRight /></span></p>
        </div>
      </div>
  );
};

export default ServiceCard;
