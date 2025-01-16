import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRaw from "./BookingRaw";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log("usr", user?.email);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDeleteBooking = (id) => {
    const proceed = confirm("Are you sure want to delete..!");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingUpdate = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method: "PATCH",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: "Confirm"})
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount > 0){
            alert('Booking Status updated successfully');
            const remaining = bookings.filter(booking=> booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = "Confirm";
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
        }
    })
  }

  return (
    <div>
      <h2 className="text-4xl">your booking : {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRaw 
              key={booking._id} 
              handleDeleteBooking={handleDeleteBooking}
              handleBookingUpdate={handleBookingUpdate}
              booking={booking}>

              </BookingRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
