import React from "react";
import MapImage from "assets/images/Map.png";

const Map = () => {
  return (
    <div className="bg-amber-900 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12 py-12 relative">
        <img src={MapImage} alt="map" className="w-[980px]" />
        <span className="text-white space-y-4 absolute top-[45%] right-[25%]">
          <p className="text-8xl font-extrabold">11,658,467</p>
          <p className="text-6xl font-extrabold">Shoes Collected</p>
        </span>
      </div>
    </div>
  );
};

export default Map;
