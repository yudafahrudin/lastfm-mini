"use client";

import React from "react";

import SongPresentation from "@/presentations/Song";
import DefaultWrapper from "@/components/DefaultWrapper";

const SongPage: React.FC = () => {
  return (
    <DefaultWrapper>
      <SongPresentation />
    </DefaultWrapper>
  );
};

export default SongPage;
