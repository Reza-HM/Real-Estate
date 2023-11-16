import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white text-black my-20">
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
};

export default Features;
