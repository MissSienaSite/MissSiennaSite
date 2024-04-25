import React from "react";
import { Card } from "react-bootstrap";

const FlukeCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        Sea Bass and Fluke Trips
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
            4 AM/PM hour Trip
          </Card.Title>
          <Card.Text>
            Join us on a thrilling 4-hour Fluke/Sea Bass excursion, available in
            both morning and afternoon slots, accommodating groups of up to 6
            passengers. Our trip package includes all essential bait, tackle,
            and gulps, ensuring a successful and enjoyable fishing outing for
            everyone on board.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-4">
            Price: $700
          </Card.Title>
          <Card.Title className="text-xl font-bold mb-2">
            6 AM hour Trip
          </Card.Title>
          <Card.Text>
            Join us on a thrilling 6-hour Fluke/Sea Bass excursion, accommodating groups of up to 6
            passengers. Our trip package includes all essential bait, tackle,
            and gulps, ensuring a successful and enjoyable fishing outing for
            everyone on board.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $900
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlukeCard;
