import React, { useEffect } from "react";
import VideoSection from "../src/components/HomePage/video/VideoSection";
import MissionStatement from "../src/components/HomePage/MissionStatement";
import CardComponent from "../src/components/HomePage/ServiceCards";
import CaptChris from "../src/components/HomePage/CaptChris";
import ContactUS from "../src/components/CharterPage/Contact";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <VideoSection/>
      <MissionStatement/>
      <CardComponent/>
      <CaptChris />
      <ContactUS />
    </>
  );
};

export default HomePage;