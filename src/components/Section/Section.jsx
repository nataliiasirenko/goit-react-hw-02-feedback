import React from "react";

export const Section = ({ children, title }) => {
    return (
      <>
        <h1>{title}</h1>
        {children}
      </>
    );
  };