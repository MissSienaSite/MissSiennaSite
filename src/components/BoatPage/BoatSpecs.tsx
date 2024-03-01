import React from "react";
import { FaCircle } from "react-icons/fa";

const BoatSpecificationsCard: React.FC = () => {
  return (
    <div className="container-fluid h-auto md:h-80 flex flex-col lg:flex-row items-center justify-center bg-blue-500 pb-2">
      {/* Subtitle and Features */}
      <div className="w-full lg:w-1/3 px-8 mt-6 lg:mt-0 text-white">
        <div className="flex flex-col items-center lg:items-start ml-4">
          <h3 className="text-3xl font-bold mb-4">Specifications</h3>
          <ul className="list-disc">
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Length: 32′ 7″
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Beam: 9′ 8″
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Draft: 20″
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Weight: 5,850 lbs.
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Fuel: 310 gal.
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Deadrise: 24.5 Deg
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Max HP: 800 HP
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Weight (Loaded): 11,650 lbs
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-2/3 max-w-screen-lg">
        <img
          src="/RiverShot.jpg"
          alt="Boat"
          className="w-full h-auto object-contain"
          style={{ maxHeight: "60vh" }}
        />
      </div>
    </div>
  );
};

export default BoatSpecificationsCard;
