import React from "react";

const BookingRaw = ({ booking, handleDeleteBooking, handleBookingUpdate }) => {
  const { _id, image, date, service, price, status } = booking;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <button
            onClick={() => handleDeleteBooking(_id)}
            className="btn btn-circle btn-outline btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{service}</td>
        <td>{date}</td>
        <td>$ {price}</td>
        <th>
          {
            status === 'Confirm'? <span className="font-bold text-primary">Confirmed</span>:
            <button onClick={() => handleBookingUpdate(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
        </th>
      </tr>
    </>
  );
};

export default BookingRaw;
