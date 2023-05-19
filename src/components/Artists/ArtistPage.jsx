import { Grid, Link, Paper, Skeleton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useGetArtist from "../../hooks/artists/useGetArtist";

const ArtistPage = () => {
  const { artist_id: artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const { data, isLoading, error } = useGetArtist(artistId);

  useEffect(() => {
    if (data) setArtist(data.results);
  }, [data]);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "32px",
      }}
    >
      <Paper
        sx={{
          minWidth: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Grid item xs={3}>
          {isLoading && <Skeleton variant="circular" width={150} height={150} />}
          {!isLoading && artist && (
            <img
              src={artist.imageurl}
              alt="band name"
              style={{ borderRadius: "50%", marginLeft: "16px" }}
              height={150}
              width={150}
            />
          )}
        </Grid>
        <Grid item xs={7} sx={{ margin: "16px" }}>
          {isLoading && <Skeleton variant="h5" />}
          {!isLoading && artist && <Typography variant="h5">{artist.name}</Typography>}
          <hr style={{ color: "#648767" }} />
          {isLoading && <Skeleton />}
          {!isLoading && artist && (
            <Typography variant="body2">
              About: {artist.description}
            </Typography>
          )}
          {isLoading && <Skeleton />}
          {!isLoading && artist && (
            <Link
              href="spotify:artist:2BPQcFpmHrLnpVsgk1QXDN"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body2" sx={{ textDecoration: "none", color: "#648767" }}>
                Open in Spotify
              </Typography>
            </Link>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ArtistPage;
