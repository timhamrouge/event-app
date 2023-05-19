import { Button, TextField, styled } from "@mui/material";
import React, { useState } from "react";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SearchInput = styled(TextField)({
  marginTop: 28,
  color: "#0C090D",
  minWidth: "400px",
  backgroundColor: "#E7E7E7",
  borderRadius: "3px",
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#0C090D',
    },
  },
});

const SearchButton = styled(Button)({
  marginTop: 28,
  color: "#0C090D",
  backgroundColor: "#E7E7E7",
  "&:hover": {
    backgroundColor: "#D6D6D6",
  },
});

const SearchBar = ({ searchForEvents }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = () => {
    searchForEvents(searchTerm);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <Container>
      <img
        height={100}
        src="https://d1plawd8huk6hh.cloudfront.net/assets/logo/png/skiddle-logo-white-landscape.png"
        alt="skiddle logo"
      />
      <SearchInput
        id="input-with-icon-adornment"
        onKeyDown={handleKeyDown}
        onChange={handleSearchChange}
        value={searchTerm}
        placeholder="search for an artist, venue or keyword"
      />
      <SearchButton variant="contained" type="submit" onClick={handleSearchSubmit}>
        Find Events
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
