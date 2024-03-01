import React from "react";
import { FaWifi, FaFish, FaPaperPlane, FaLifeRing } from "react-icons/fa";

const BoatIntro: React.FC = () => {
  return (
    <div className="container-fluid h-auto md:h-80 flex flex-col lg:flex-row items-center justify-center bg-gray-200">
      {/* Video */}
      <div className="w-full lg:w-2/3 max-w-screen-lg">
        <video
          width="100%"
          height="auto"
          style={{ maxHeight: "60vh" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/DroneShot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtitle and Features */}
      <div className="w-full lg:w-1/3 px-8 mt-6 lg:mt-0">
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-3xl font-bold mb-4">32 Contender St</h3>
          <ul className="list-disc">
            <li className="flex items-center mb-2">
              <FaWifi className="h-6 w-6 mr-2 text-blue-500" />
              Wifi Available With StarLink
            </li>
            <li className="flex items-center mb-2">
              <FaFish className="h-6 w-6 mr-2 text-blue-500" />
              Built to Fish
            </li>
            <li className="flex items-center mb-2">
              <FaPaperPlane className="h-6 w-6 mr-2 text-blue-500" />
              Comfortable Fast & Dry
            </li>
            <li className="flex items-center mb-2">
              <FaLifeRing className="h-6 w-6 mr-2 text-blue-500" />
              Life Raft and Epirb Equipt
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoatIntro;
