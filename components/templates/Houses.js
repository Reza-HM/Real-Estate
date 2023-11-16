import React from "react";
import HouseBox from "../modules/HouseBox";
import db from "./../../data/db.json";

const Houses = () => {
  return (
    <div className="container grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-20">
      {db.homes.slice(0, 6).map((home) => (
        <HouseBox key={home.id} {...home} />
      ))}
    </div>
  );
};

export default Houses;
