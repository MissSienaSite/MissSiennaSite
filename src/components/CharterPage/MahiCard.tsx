import React from "react";
import { Card } from "react-bootstrap";

const MahiCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        Midshore Tuna and Mahi Trips
      </Card.Header>

      <Card.Body className="flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-1/3">
          <Card.Img
            src="/MahiCharter.JPG"
            alt="Card Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Subtitle and Paragraph */}
        <div className="md:w-2/3 p-4">
          <Card.Title className="text-xl font-bold mb-2">
            12 hour Trip
          </Card.Title>
          <Card.Text>
            Set sail on an extraordinary 12-hour Midshore Tuna and Mahi
            expedition, catering to groups of up to 5 passengers. This adventure
            offers the opportunity to encounter fascinating wildlife like whales
            and dolphins, adding an extra layer of excitement to your journey.
            With all bait, tackle, and equipment provided.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $2500
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MahiCard;
