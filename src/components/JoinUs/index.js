import React from "react";
import { Icons } from "components";

const JoinUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
      <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 bg-white lg:my-40 my-6 shadow-xl shadow-black/10 rounded-3xl lg:gap-20 gap-8 justify-center items-center">
        <div className="flex-row space-y-6 lg:pl-16 px-4 pt-8">
          <p className="lg:text-[56px] text-3xl font-bold lg:text-start text-center">
            Why join us
          </p>
          <ul>
            <span className="flex text-[20px] font-normal">
              <Icons.Check className="w-6 h-6 text-green-600" />
              Est et in pharetra magna adipiscing ornare aliquam.
            </span>
            <span className="flex text-[20px] font-normal">
              <Icons.Check className="w-6 h-6 text-green-600" />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </span>
            <span className="flex text-[20px] font-normal">
              <Icons.Check className="w-6 h-6 text-green-600" />
              Ullamcorper ornare in et egestas dolor orci.
            </span>
          </ul>
          <button className="bg-transparent lg:mx-0 mx-auto block p-4 text-xl font-medium hover:bg-amber-900 text-amber-900 hover:text-white border border-amber-900 hover:border-transparent rounded-lg">
            Sign up now
          </button>
        </div>
        <img
          className="lg:w-[713px] w-full -my-12 lg:mx-8"
          alt="productImage"
          src="./JoinVideo.png"
        />
      </div>
    </div>
  );
};

export default JoinUs;
