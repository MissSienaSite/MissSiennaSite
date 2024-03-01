import React from "react";
import VideoSection from "../src/components/HomePage/video/VideoSection";
import MissionStatement from "../src/components/HomePage/MissionStatement";
import CardComponent from "../src/components/HomePage/ServiceCards";

const HomePage: React.FC = () => {
  return (
    <>
      <VideoSection/>
      <MissionStatement/>
      <CardComponent/>
    </>
  );
};

export default HomePage;