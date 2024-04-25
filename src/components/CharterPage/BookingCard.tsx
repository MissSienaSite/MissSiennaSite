import React from "react";

const BookingCalendar: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-blue-500 pt-10 pb-10">
      <h2 className="text-2xl font-bold mb-10 text-center text-white">
        Charter Policy
      </h2>
      <ol className="text-center text-xl text-white">
        <li>
          Charter must be cancelled no more than 10 days before sailing in order
          to receive a refund.
        </li>
        <li>No hard liquor or illegal substances allowed.</li>
        <li>Captain has the right to end the charter due to safety issues.</li>
        <li>Standard gratuity for all trips is 15%-20% if satisfied.</li>
      </ol>
    </div>
  );
};

export default BookingCalendar;
