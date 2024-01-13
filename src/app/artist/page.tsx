"use client";

import React from "react";

import ArtistPresentation from "@/presentations/Artist";
import DefaultWrapper from "@/components/DefaultWrapper";

const ArtistPage: React.FC = () => {
  return (
    <DefaultWrapper>
      <ArtistPresentation />
    </DefaultWrapper>
  );
};

export default ArtistPage;
