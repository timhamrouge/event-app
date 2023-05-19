import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid, styled, Typography } from "@mui/material";
import format from "date-fns/format";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import useGetEvent from "../../hooks/events/useGetEvent";

const PageHeader = styled(Grid)({
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid #0C090D",
  backgroundColor: "#648767"
});

const StyledTypography = styled(Typography)({
  marginTop: "8px"
});

const EventPage = () => {
  const { event_id: eventId } = useParams();
  const [event, setEvent] = useState(data);
  const { data, isLoading } = useGetEvent(eventId);

  useEffect(() => {
    if (data) setEvent(data.results);
  }, [data]);

  return (
    <>
      <Grid container>
        {isLoading && (
          <Typography>
            Loading...
          </Typography>
        )}
        {!isLoading && event && (
        <>
        <PageHeader item xs={12} >
          <Grid item xs={3} ml={12}>
            <img height={250} width={250} src={event?.largeimageurl} />
          </Grid>

          <Grid item xs={9}>
            <Typography variant="h5">{event?.eventname}</Typography>

            <Typography>
            <LocationOnIcon /> {event?.venue.name}, {event?.venue.town}
            </Typography>

            <Typography> <CalendarMonthIcon />{format(new Date(event.date), 'EEEE LLL do ')}</Typography>

            <Typography><AccessTimeIcon />
            {event.openingtimes.doorsopen} - {event.openingtimes.doorsclose}
            </Typography>
          </Grid>
        </PageHeader>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            marginTop: "28px"
          }}
        >
          <Grid item xs={7}>
            <Typography variant="h5">{event?.eventname}</Typography>
            <hr />

            <StyledTypography>{event?.description}</StyledTypography>

             <StyledTypography>Entry: £{event?.entryprice}</StyledTypography>

            { event.genres && <StyledTypography>
              Genres: {event.genres.map((genre) => `${genre.name},`)}
            </StyledTypography>
}

            <StyledTypography>Artists:</StyledTypography>

            <Grid item xs={7} sx={{display: "flex", gap: "20px", flexDirection: "row" }}>
            {event?.artists.map((artist) => (
                <Link
                  to={`/artist/${artist.artistid}`}
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    flexDirection: "column",
                    color: "#0C090D",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    height={60}
                    width={60}
                    style={{ borderRadius: "50%" }}
                    src={artist.image}
                    alt={`image of ${artist.name}`}
                  />
                  <Typography>{artist.name}</Typography>
                </Link>
            ))}
            </Grid>
          </Grid>
        </Grid>
        </>
        )}
      </Grid>
    </>
  );
};

export default EventPage;
