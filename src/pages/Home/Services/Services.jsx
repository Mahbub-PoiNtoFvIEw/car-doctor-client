import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import calendar from "../../../assets/icons/calendar.png";
import phone from "../../../assets/icons/phone.png";
import location from "../../../assets/icons/location.png";
import useServices from "../../../Hooks/useServices";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState('');
  const services = useServices(asc, search);
  const [servicesData, setServicesData] = useState(6);

  // useEffect(() => {
  //   fetch('https://car-doctor-server-omega-ten-29.vercel.app/services')
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const handleSearch = e =>{
    e.preventDefault();
    setSearch(e.target.search.value)
  }
  console.log(search)
  return (
    <div className="mb-4">
      <div className="w-1/2 mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#FF3811] mb-1">Services</h2>
        <h3 className="text-4xl font-bold mb-3">Our Service Area</h3>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <form onSubmit={handleSearch} className="join">
          <input
          type="text"
          name="search"
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <input type="submit" value="search" className="btn join-item rounded-r-full"/>
        </form>
        <br />
        <button
          onClick={() => setAsc(!asc)}
          className="btn bg-[#FF3811] text-white"
        >
          Price: {asc ? "High to Low" : "Low to High"}
        </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {services.slice(0, servicesData).map((service, idx) => (
          <ServiceCard key={idx} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-4">
        {servicesData === 6 ? (
          <button
            onClick={() => setServicesData(services.length)}
            className="btn border-[.5px] border-[#FF3811] bg-white text-[#FF3811]"
          >
            Show more Services
          </button>
        ) : (
          <button
            onClick={() => setServicesData(6)}
            className="btn border-[.5px] border-[#FF3811] bg-white text-[#FF3811]"
          >
            Show less Services
          </button>
        )}
      </div>
      <div className="text-white bg-[#151515] rounded-xl p-14 flex justify-between items-center gap-6">
        <div className="flex gap-2 justify-center items-center">
          <img className="w-6" src={calendar} alt="" />
          <div>
            <h3>We are open monday-friday</h3>
            <p>7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <img className="w-6" src={phone} alt="" />
          <div>
            <h3>Have a question?</h3>
            <p>+2546 251 2658</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <img className="w-6" src={location} alt="" />
          <div>
            <h3>Need a repair? our address</h3>
            <p>Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
