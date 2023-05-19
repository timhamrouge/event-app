import React from "react";
import { Routes, Route } from 'react-router-dom';

import SearchPage from "./components/Search/SearchPage";
import EventPage from "./components/Events/EventPage";
import ArtistPage from "./components/Artists/ArtistPage";

const App = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/event/:event_id" element={<EventPage />} />
          <Route path="/artist/:artist_id" element={<ArtistPage />} />
        </Routes>
      </>
    )
};

export default App;
