import { Typography, styled } from "@mui/material";
import React from "react";

import SearchResultCard from "./SearchResultCard";

const Container = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: "28px",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});

const SearchResults = ({ events }) => {
  return (
    <Container>
      {!events && (
        <Typography sx={{ color: "#0C090D" }}>
          No events to display, please use the search box above to find some
        </Typography>
      )}
      {events && !events.length && (
        <Typography sx={{ color: "#0C090D" }}>
          Sorry, we couldn't find anything that matched your search, please try again
        </Typography>
      )}
      {events && events.map((event) => (
        <SearchResultCard
          key={event.id}
          event={event}
        />
      ))}
    </Container>
  );
};

export default SearchResults;
