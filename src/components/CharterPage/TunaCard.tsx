import React from "react";
import { Card } from "react-bootstrap";

const TunaCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        Off Shore Tuna / Mahi / Tile Trips
      </Card.Header>

      <Card.Body className="flex flex-col md:flex-row">
        {" "}
        {/* Left Side - Image */}
        <div className="md:w-1/3">
          <Card.Img
            src="/TunaCharter.JPG"
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
            Embark on an epic 12-hour Offshore Canyon expedition,
            ideal for groups of up to 5 passengers. Our trip includes the use of
            2 Electric LP reels for deep dropping, enhancing your chances of
            landing prized catches. Encounter the beauty of the ocean with
            opportunities to spot dolphins and whales, adding a magical touch to
            your fishing experience.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $3000
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TunaCard;
