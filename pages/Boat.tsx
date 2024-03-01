import React from "react";
import BoatIntro from "../src/components/BoatPage/BoatIntro";
import BoatSpecificationsCard from "../src/components/BoatPage/BoatSpecs";
import BoatImages from "../src/components/BoatPage/BoatImages";

const BoatPage: React.FC = () => {
  return ( 
    <>
      <BoatIntro/>
      <BoatSpecificationsCard/>
      <BoatImages/>
    </>
  );
};

export default BoatPage;