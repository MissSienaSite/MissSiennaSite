import React from 'react';
import { Card } from 'react-bootstrap';

const MahiCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">Mahi Mahi Trips</Card.Header>

      <Card.Body className="flex">
        {/* Left Side - Image */}
        <div className="w-1/3">
          <Card.Img src="/MahiCharter.JPG" alt="Card Image" className="w-full h-auto" />
        </div>

        {/* Right Side - Subtitle and Paragraph */}
        <div className="w-2/3 p-4">
          <Card.Title className="text-xl font-bold mb-2">Subtitle</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis 
            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
    
  );
};

export default MahiCard;
