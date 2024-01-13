"use client";

import React from "react";
import { Stack, Grid, Box, Container } from "@mui/material";

import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useArtistCase } from "@/useCases/Artist";

const HomePresenter: React.FC = () => {
  const { artistList } = useArtistCase();

  return (
    <Container>
      <Stack mb={5} spacing={2}>
        <Typography variant="h3">Top 50 Artist</Typography>
      </Stack>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
      >
        <Grid item xs={0.5} />
        <Grid item xs={1} />
        <Grid item xs={5.5}>
          <Typography variant="subtitle2">Name</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2">Listener</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Play Count</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {artistList?.map((data, index) => {
          return (
            <>
              <Grid item xs={0.5}>
                {index + 1}
              </Grid>
              <Grid item xs={1}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={data.image[0]["#text"]} />
                </ListItemAvatar>
              </Grid>
              <Grid item xs={5.5}>
                <Typography variant="subtitle1"> {data.name}</Typography>
              </Grid>
              <Grid item xs={3}>
                {data.listeners}
              </Grid>
              <Grid item xs={2}>
                {data.playcount}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HomePresenter;
