import React from "react";
import TitleBar from "../components/CharterPage/TitleBar";
import BassCard from "../components/CharterPage/BassCard";
import MahiCard from "../components/CharterPage/MahiCard";
import TunaCard from "../components/CharterPage/TunaCard";
import BookingCalendar from "../components/CharterPage/BookingCard";

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