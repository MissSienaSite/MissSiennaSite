import React from "react";
import { Card } from "react-bootstrap";

const OffShoreSeaBassCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        OffShore Sea Bass Trips
      </Card.Header>

      <Card.Body className="flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-1/3">
          <Card.Img
            src="/BassCharter.jpg"
            alt="Card Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Subtitle and Paragraph */}
        <div className="md:w-2/3 p-4">
          <Card.Title className="text-xl font-bold mb-2">
            8 hour AM Trip
          </Card.Title>
          <Card.Text>
            Embark on an unforgettable 8-hour Offshore Wreck Sea Bass
            expedition, designed for morning departures and accommodating groups
            of up to 6 passengers. Our comprehensive trip package includes
            top-quality bait, tackle, and gulps, ensuring a productive and
            thrilling fishing adventure on the open sea.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $1200
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OffShoreSeaBassCard;
