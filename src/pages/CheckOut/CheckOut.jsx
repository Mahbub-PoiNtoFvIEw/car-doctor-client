import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  console.log("find service by id", service);
  const {user} = useContext(AuthContext);

  const handleOrderBook = e =>{
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const booking ={
        customerName: name,
        email,
        image: service.img,
        date,
        service: service.title,
        service_id: service._id,
        price: service.price
    }
    console.log(booking)

    fetch('http://localhost:5000/bookings',{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
    })
  }
  return (
    <div className="my-6">
      <h2 className="text-center text-3xl my-4">Book service :{service.title}</h2>
      <form onSubmit={handleOrderBook} className="card-body max-w-4xl mx-auto bg-[#F3F3F3] rounded-xl">
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              name="dueAmount"
              defaultValue={'$'+service.price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
        <input className="btn bg-[#FF3811] text-white" type="submit" value="Confirm Order" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
