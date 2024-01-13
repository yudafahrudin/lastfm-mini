"use client";

import React from "react";

import HomePresentation from "@/presentations/Home";
import DefaultWrapper from "@/components/DefaultWrapper";

const HomePage: React.FC = () => {
  return (
    <DefaultWrapper>
      <HomePresentation />
    </DefaultWrapper>
  );
};

export default HomePage;
