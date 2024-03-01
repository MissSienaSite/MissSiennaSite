import React from 'react';

const CardComponent: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <div
            className="bg-cover bg-center h-64"
            style={{ backgroundImage: "url('/TunaTrip.jpg')" }}
          >
            <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center">
              <button className="text-white">Book A Trip</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <div
            className="bg-cover bg-center h-64"
            style={{ backgroundImage: "url('/Drunk.jpg')" }}
          >
            <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center">
              <button className="text-white">F Cove Drunk Fest</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <div
            className="bg-cover bg-center h-64"
            style={{ backgroundImage: "url('/RecentTrip.jpg')" }}
          >
            <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center">
              <button className="text-white">Recent Trips</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <div
            className="bg-cover bg-center h-64"
            style={{ backgroundImage: "url('/AboutUs.jpg')" }}
          >
            <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center">
              <button className="text-white">About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
