import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import useGetEvents from "../../hooks/events/useGetEvents";

const SearchHeader = styled(Grid)({
  backgroundColor: "#648767",
  height: "300px",
  borderBottom: "1px solid #0C090D",
});

const SearchPage = () => {
  const [events, setEvents] = useState(data);
  const [searchTerm, setSearchTerm] = useState();

  const { data } = useGetEvents(searchTerm);

  useEffect(() => {
    if (data) setEvents(data.results);
  }, [data]);

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(`keyword=${newSearchTerm}`);
  };

  return (
    <Grid container>
      <SearchHeader item xs={12}>
        <SearchBar searchForEvents={handleSearch} />
      </SearchHeader>
      <Grid item xs={12}>
        <SearchResults events={events} />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
