"use client";

import React from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const HomePresenter: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack spacing={3} textAlign="center">
      <Typography variant={isMobile ? "subtitle1" : "h2"}>
        Play song list
      </Typography>
    </Stack>
  );
};

export default HomePresenter;
