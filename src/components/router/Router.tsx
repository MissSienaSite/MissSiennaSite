import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CharterPage from "../../pages/CharterPage";
import BoatPage from "../../pages/BoatPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Charters" Component={CharterPage} />
        <Route path="/Boat" Component={BoatPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;