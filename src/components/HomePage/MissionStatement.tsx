import React from 'react';

const MissionStatement: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-8">
      <div className="lg:w-1/2 lg:mr-8">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis augue sagittis interdum at vel massa. Vestibulum vehicula justo nec aliquam luctus. Cras varius scelerisque leo nec facilisis. Mauris ut lectus eu orci lobortis ultricies.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src="/BoatDrawing.jpg" alt="Mission Image" className="w-full" />
      </div>
    </div>
  );
};

export default MissionStatement;
