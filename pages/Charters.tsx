import React from "react";
import TitleBar from "../src/components/CharterPage/TitleBar";
import BassCard from "../src/components/CharterPage/BassCard";
import MahiCard from "../src/components/CharterPage/MahiCard";
import TunaCard from "../src/components/CharterPage/TunaCard";
import BookingCalendar from "../src/components/CharterPage/BookingCard";

const CharterPage: React.FC = () => {
  return (
    <>
      <TitleBar/>
      <BassCard/>
      <MahiCard/>
      <TunaCard/>
      <BookingCalendar/>
    </>
  );
};

export default CharterPage;