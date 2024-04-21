import React from "react";
import MapImage from "assets/images/Map.png";

const Map = () => {
  return (
    <div className="bg-amber-900 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12 lg:py-12 py-28 relative">
        <img src={MapImage} alt="map" className="w-[980px]" />
        <span className="text-white space-y-4 absolute lg:top-[45%] lg:right-[25%] top-[55%] right-[10%] lg:text-start text-center">
          <p className="lg:text-8xl text-5xl font-extrabold">11,658,467</p>
          <p className="lg:text-6xl text-4xl font-extrabold">Shoes Collected</p>
        </span>
      </div>
    </div>
  );
};

export default Map;
