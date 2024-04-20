import React from "react";
import Icons from "components/Icons";

const Section = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-12 my-12 gap-8">
      <div className="lg:col-span-2 flex items-center justify-start">
        <div className="lg:text-start text-center">
          <p className="font-extrabold lg:text-6xl text-5xl text-[#0F172A] mb-6">
            Collectible Sneakers
          </p>
          <p className="font-normal text-md text-[#0F172A] mb-8">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex items-center lg:justify-start justify-center">
            <button className="bg-transparent p-4 text-xl font-medium hover:bg-amber-900 text-amber-900 hover:text-white border border-amber-900 hover:border-transparent rounded-lg">
              Sign up now
            </button>

            <span className="flex p-4 font-medium text-amber-900 text-lg items-center">
              <Icons.CirclePlay className="w-5 h-5 mr-2" /> Watch Demo
            </span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 flex justify-center">
        <img
          src="./Sneaker.png"
          className="lg:w-[486px] w-[361px]"
          alt="sneaker"
        />
      </div>
    </div>
  );
};

export default Section;
