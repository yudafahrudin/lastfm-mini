"use client";

import React from "react";

import SongPresentation from "@/presentations/Song";
import DefaultWrapper from "@/components/DefaultWrapper";

const HomePage: React.FC = () => {
  return (
    <DefaultWrapper>
      <SongPresentation />
    </DefaultWrapper>
  );
};

export default HomePage;
