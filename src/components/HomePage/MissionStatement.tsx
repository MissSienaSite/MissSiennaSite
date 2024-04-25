import React from "react";

const MissionStatement: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-8">
      <div className="lg:w-1/2 lg:mr-8">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          At Miss Sienna Sport Fishing, our mission is to provide exceptional fishing
          experiences and customized adventures on the water. Whether you're
          seeking the thrill of catching Striped Bass or indulging in a relaxing
          sunset cruise, we are committed to delivering safe, memorable, and
          enjoyable trips for our guests. With our top-of-the-line equipment,
          experienced crew, and dedication to customer satisfaction, we strive
          to create unforgettable moments and foster a deep appreciation for
          marine life and the beauty of our oceans.{" "}
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src="/BoatDrawing.jpg" alt="Mission Image" className="w-full" />
      </div>
    </div>
  );
};

export default MissionStatement;
