import React from "react";
import { Link } from "react-router-dom";

const CardComponent: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <div className="container w-full py-8 ">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">What We Do</h1>
          <p className="text-lg text-gray-600">
            We are a premier fishing charter offering thrilling trips for up to
            6 passengers. From exciting Striped Bass adventures to deep-sea Tuna
            expeditions, our experienced crew ensures an unforgettable
            experience. Our state-of-the-art Contender 32ST boat equipped with
            top-notch amenities and advanced technology guarantees a safe and
            enjoyable journey. Join us for a day of adventure and reel in
            unforgettable memories!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div
              className="bg-cover bg-center h-64"
              style={{ backgroundImage: "url('/TunaTrip.jpg')" }}
            >
              <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center">
                <Link to="/Charters">
                  <button className="text-white">Trips We Offer</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div
              className="bg-cover bg-center h-64"
              style={{ backgroundImage: "url('/RiverShot.jpg')" }}
            >
              <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center">
              <Link to="/Boat">
                <button className="text-white">Check Out Our Boat</button>
                </Link>
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
                <Link to="/Trips">
                <button className="text-white">Recent Trips</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
