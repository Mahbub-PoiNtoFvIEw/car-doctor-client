import React from "react";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="relative">
      <div className="w-1/2 mx-auto text-center mb-4">
        <h2 className="text-2xl font-bold text-[#FF3811] mb-1">Team</h2>
        <h3 className="text-4xl font-bold mb-3">Meet Our Team</h3>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="carousel">
        {/* Slide 1 start */}
        <div
          id="sl1"
          className="carousel-item w-full relative grid md:grid-cols-3 grid-cols-1 gap-4 mb-6"
        >
          {/* slide 1 card 1 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img1} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 1 card 2 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img2} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 1 card 3 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img3} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 1 navigator */}
          <div className="absolute left-0 right-0 top-2/3 bottom-0 flex justify-between">
            <a
              href="#sl3"
              className="btn btn-circle bg-[#F3F3F3] text-[#000000] z-10"
            >
              <FaArrowLeft></FaArrowLeft>
            </a>
            <a
              href="#sl2"
              className="btn btn-circle bg-[#FF3811] text-[#FFFFFF] z-10"
            >
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        {/* Slide 1 end */}
        {/* Slide 2 start */}
        <div
          id="sl2"
          className="carousel-item w-full relative grid md:grid-cols-3 grid-cols-1 gap-4 mb-6"
        >
          {/* slide 2 card 1 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img1} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 2 card 2 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img2} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 2 card 3 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img3} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 2 navigator */}
          <div className="absolute left-0 right-0 top-2/3 bottom-0 flex justify-between">
            <a
              href="#sl1"
              className="btn btn-circle bg-[#F3F3F3] text-[#000000] z-10"
            >
              <FaArrowLeft></FaArrowLeft>
            </a>
            <a
              href="#sl3"
              className="btn btn-circle bg-[#FF3811] text-[#FFFFFF] z-10"
            >
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        {/* Slide 2 end */}
        {/* Slide 3 start */}
        <div
          id="sl3"
          className="carousel-item w-full relative grid md:grid-cols-3 grid-cols-1 gap-4 mb-6"
        >
          {/* slide 3 card 1 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img1} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 3 card 2 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img2} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 3 card 3 */}
          <div className="card border-[.5px] border-[#E8E8E8] shadow-xl mt-4">
            <figure className="px-4 pt-4">
              <img src={img3} alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body pt-2 mt-2 items-center text-center font-bold">
              <h2 className="card-title text-[#444444]">Car Engine Plug</h2>
              <div className="flex items-center justify-center gap-2">
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#0A66C2]">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-[#395185]">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="rounded-full p-2 text-[#FFFFFF] bg-gradient-to-r from-[#774ADF] from-4% via-[#E94369] via-57% to-[#F08053] to-90%">
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
          </div>
          {/* slide 3 navigator */}
          <div className="absolute left-0 right-0 top-2/3 bottom-0 flex justify-between">
            <a
              href="#sl2"
              className="btn btn-circle bg-[#F3F3F3] text-[#000000] z-10"
            >
              <FaArrowLeft></FaArrowLeft>
            </a>
            <a
              href="#sl1"
              className="btn btn-circle bg-[#FF3811] text-[#FFFFFF] z-10"
            >
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        {/* Slide 3 end */}
      </div>
    </div>
  );
};

export default Team;
