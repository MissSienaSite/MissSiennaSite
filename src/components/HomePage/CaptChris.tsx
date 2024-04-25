import React from "react";

const CaptainBio: React.FC = () => {
  return (
    <div className="bg-gray-200 py-8 flex justify-center items-center">
      <div className="container flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-2">Meet Captain Chris</h1>
          <p className="text-lg text-gray-600">
            Captain Chris holds a 100-ton master's license and brings a wealth
            of experience from fishing across New Jersey throughout his life.
            His impressive achievements include winning the daily prize in the
            Jimmy Johnson Tournament for the heaviest tuna catch and securing
            first place overall in the small boat division.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 p-8">
          <img
            src="/CaptChris.jpg"
            alt="Captain Chris"
            className="rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainBio;
