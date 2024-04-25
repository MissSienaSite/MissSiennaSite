import React from "react";

const ContactUS: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-light-500 pt-10 pb-10">
      <h2 className="text-2xl font-bold mb-10 text-center text-black">
        Call Us To Book Now!
      </h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Call Now
      </button>
      <img src="/logo.jpg" style={{ height: "200px" }} alt="Logo" />
    </div>
  );
};

export default ContactUS;
