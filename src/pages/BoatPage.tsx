import React from "react";
import BoatIntro from "../components/BoatPage/BoatIntro";
import BoatSpecificationsCard from "../components/BoatPage/BoatSpecs";
import BoatImages from "../components/BoatPage/BoatImages";

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