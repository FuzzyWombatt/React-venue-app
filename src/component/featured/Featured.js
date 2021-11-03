import React from "react";
import Carrousel from "./carrousel";
import Timer from "./Timer";

const Featured = () => {
  return (
    <div className="relative overflow-hidden">
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper font-Auto-techno ">Hatsune Miku</div>
      </div>
      <Timer />
    </div>
  );
};
export default Featured;
