import React from "react";
import { Card } from "react-bootstrap";

const BassCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        Striped Bass Trips
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
            6 hour Trip
          </Card.Title>
          <Card.Text>
            Embark on an exhilarating 6-hour Striped Bass adventure, perfect for
            groups of up to 6 passengers. Our trip includes all the necessary
            bait and tackle, ensuring a seamless and enjoyable fishing
            experience on the water.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $1000
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BassCard;
