"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

import HomePresentation from "@/presentations/Home";
import DefaultWrapper from "@/components/DefaultWrapper";

const HomePage: React.FC = () => {
  const openLink = (url?: string) => {
    window.open(url, "_blank");
  };

  return (
    <DefaultWrapper
      rightIcon={
        <>
          <IconButton
            onClick={() => openLink("https://www.linkedin.com/in/yudafahrudin")}
          >
            <LinkedIn sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            onClick={() => openLink("https://github.com/yudafahrudin")}
          >
            <GitHub sx={{ fontSize: 20 }} />
          </IconButton>
        </>
      }
    >
      <HomePresentation />
    </DefaultWrapper>
  );
};

export default HomePage;
