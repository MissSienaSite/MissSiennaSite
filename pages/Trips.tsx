import React from 'react';

const TripPage: React.FC = () => {
  // Placeholder images
  const placeholders = [
    { id: 1, url: 'https://via.placeholder.com/400', alt: 'Placeholder 1' },
    { id: 2, url: 'https://via.placeholder.com/400', alt: 'Placeholder 2' },
    { id: 3, url: 'https://via.placeholder.com/400', alt: 'Placeholder 3' },
    { id: 4, url: 'https://via.placeholder.com/400', alt: 'Placeholder 4' },
    { id: 5, url: 'https://via.placeholder.com/400', alt: 'Placeholder 5' },
    { id: 6, url: 'https://via.placeholder.com/400', alt: 'Placeholder 6' },
    { id: 7, url: 'https://via.placeholder.com/400', alt: 'Placeholder 7' },
    { id: 8, url: 'https://via.placeholder.com/400', alt: 'Placeholder 8' },
    { id: 9, url: 'https://via.placeholder.com/400', alt: 'Placeholder 9' },
    { id: 10, url: 'https://via.placeholder.com/400', alt: 'Placeholder 10' },
    { id: 11, url: 'https://via.placeholder.com/400', alt: 'Placeholder 11' },
    { id: 12, url: 'https://via.placeholder.com/400', alt: 'Placeholder 12' },
    { id: 13, url: 'https://via.placeholder.com/400', alt: 'Placeholder 13' },
    { id: 14, url: 'https://via.placeholder.com/400', alt: 'Placeholder 14' },
    { id: 15, url: 'https://via.placeholder.com/400', alt: 'Placeholder 15' },
    { id: 16, url: 'https://via.placeholder.com/400', alt: 'Placeholder 16' },
    { id: 17, url: 'https://via.placeholder.com/400', alt: 'Placeholder 17' },
    { id: 18, url: 'https://via.placeholder.com/400', alt: 'Placeholder 18' },
    { id: 19, url: 'https://via.placeholder.com/400', alt: 'Placeholder 19' },
    { id: 20, url: 'https://via.placeholder.com/400', alt: 'Placeholder 20' },
    { id: 21, url: 'https://via.placeholder.com/400', alt: 'Placeholder 21' },
    { id: 22, url: 'https://via.placeholder.com/400', alt: 'Placeholder 22' },
    { id: 23, url: 'https://via.placeholder.com/400', alt: 'Placeholder 23' },
    { id: 24, url: 'https://via.placeholder.com/400', alt: 'Placeholder 24' },
  ];

  return (
    <div className="container-fluid py-8">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {placeholders.map((image) => (
          <div key={image.id} className="col bg-gray-200 rounded-lg overflow-hidden">
            <img src={image.url} alt={image.alt} className="w-100 h-100 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripPage;
