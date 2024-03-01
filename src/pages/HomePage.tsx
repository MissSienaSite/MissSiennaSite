import React from "react";
import VideoSection from "../components/HomePage/video/VideoSection";
import MissionStatement from "../components/HomePage/MissionStatement";
import CardComponent from "../components/HomePage/ServiceCards";

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