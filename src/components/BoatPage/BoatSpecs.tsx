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
              Contender 32ST
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Twin Yamaha 300
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Cruise speed of 35mph with 60mph top speed
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Dual Livewell
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Seadek
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Night Track – night vision
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Cmor Mapping electronics
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Satellite Phone and Garmin InReach
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Garmin radar/sonar/gps
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Rhodan Trolling motor
            </li>
            <li className="flex items-center mb-2">
              <FaCircle className="h-6 w-6 mr-2" />
              Custom Rods, Shimano tackle, LP electric reels
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
