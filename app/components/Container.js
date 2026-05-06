"use client";
import React from "react";
import FaqBackground from "./FaqBackground";
const Container = ({ children }) => {
  return (
    <div className="relative mt-[64px]">
      <FaqBackground />
      {children}
    </div>
  );
};

export default Container;
