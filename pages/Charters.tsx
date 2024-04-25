import React, { useEffect } from "react";
import TitleBar from "../src/components/CharterPage/TitleBar";
import BassCard from "../src/components/CharterPage/BassCard";
import FlukeCard from "../src/components/CharterPage/FlukeCard";
import MahiCard from "../src/components/CharterPage/MahiCard";
import TunaCard from "../src/components/CharterPage/TunaCard";
import BookingCalendar from "../src/components/CharterPage/BookingCard";
import OffShoreSeaBassCard from "../src/components/CharterPage/OffShoreSeabass";
import ContactUS from "../src/components/CharterPage/Contact";

const CharterPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <TitleBar />
      <BassCard />
      <FlukeCard />
      <OffShoreSeaBassCard />
      <MahiCard />
      <TunaCard />
      <BookingCalendar />
      <ContactUS />
    </>
  );
};

export default CharterPage;
