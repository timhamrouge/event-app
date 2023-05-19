import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from "@mui/material";
import format from "date-fns/format";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled(Card)({
  position: "relative",
});

const StyledTypography = styled(Typography)({
  color: "#0C090D !important",
  display: "flex",
  marginTop: "4px",
  alignItems: "center",
});

const SearchResultCard = ({ event, loading = false }) => {
  return (
    <>
      {loading && <Skeleton variant="rounded" width={320} height={400} />}
      {event && (
        <Container sx={{ width: 320, height: 400 }}>
          <CardMedia sx={{ height: "50%", width: "100%" }} image={event.largeimageurl} title={event.eventname} />
          <CardContent xs={{ height: "40%" }}>
            <StyledTypography gutterBottom component="div">
              {event.eventname}
            </StyledTypography>
            <StyledTypography variant="body2">
              <CalendarMonthIcon />{format(new Date(event.date), 'EEEE LLL do ')}
            </StyledTypography>
            <StyledTypography variant="body2">
              <LocationOnIcon />{`${event.venue.name}, ${event.venue.town}`}
            </StyledTypography>
          </CardContent>
          <CardActions sx={{ height: "10%", width: "95%", position: "absolute", bottom: 0 }}>
            <Button fullWidth variant="contained" sx={{
              color: "#0C090D",
              backgroundColor: "#648767",
              "&:hover": {
                backgroundColor: "#729775",
              }
            }}>
              <Link to={`/event/${event.id}`} style={{ width: "100%", textDecoration: "none", color: "#0C090D" }}>
                See Event
              </Link>
            </Button>
          </CardActions>
        </Container>
      )}
    </>
  );
};

export default SearchResultCard;
