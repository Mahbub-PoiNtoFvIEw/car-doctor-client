import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import calendar from "../../../assets/icons/calendar.png";
import phone from "../../../assets/icons/phone.png";
import location from "../../../assets/icons/location.png";

const Services = () => {
  const [services, setServices] = useState([]);
  const [servicesData, setServicesData] = useState(6);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-4">
      <div className="w-1/2 mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#FF3811] mb-1">Services</h2>
        <h3 className="text-4xl font-bold mb-3">Our Service Area</h3>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
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
