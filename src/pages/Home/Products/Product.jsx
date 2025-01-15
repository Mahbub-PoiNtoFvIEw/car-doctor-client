import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Product = ({ product }) => {
  const { title, rating, price, image } = product;
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  //   console.log('ful star',Array.from({ length: fullStars }).map((_, index)=>console.log('ind',index)))
  return (
    <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-40 px-20 py-6 m-6 bg-[#F3F3F3]"
        />
      </figure>
      <div className="card-body pt-0 mt-0 items-center text-center font-bold">
        <div className="flex items-center space-x-1 text-[#FF912C]">
          {Array.from({ length: fullStars }).map((_, index) => (
            <FaStar key={`full-${index}`} />
          ))}
          {halfStars === 1 && <FaStarHalfAlt />}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <FaRegStar key={`empty-${index}`} />
          ))}
        </div>
        <h2 className="card-title text-[#444444]">{title}</h2>
        <p className="text-[#FF3811]">Price : ${price} </p>
      </div>
    </div>
  );
};

export default Product;
