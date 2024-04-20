import React from "react";
import Image1 from "assets/images/Picture1.png";
import Image2 from "assets/images/Picture2.png";
import Image3 from "assets/images/Picture3.png";
import { Icons } from "components";

const Product = () => {
  const PRODUCT_ARRAY = [
    {
      id: 1,
      image: Image1,
      title: "Title",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      id: 2,
      image: Image2,
      title: "Title",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      id: 3,
      image: Image3,
      title: "Title",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
  ];
  return (
    <div className="bg-[#0F172A] lg:px-6 py-20">
      <div className="mx-auto max-w-7xl lg:flex block lg:justify-between mb-12 text-center lg:text-start space-y-8 lg:space-y-0">
        <span className="lg:text-6xl text-3xl text-white font-extrabold">
          The best of the best
        </span>
        <button className="bg-transparent mx-auto lg:mx-0 justify-center flex rounded-lg px-6 py-5 text-xl font-medium hover:bg-white text-white hover:text-[#0F172A] border border-white hover:border-transparent">
          Sign up now
        </button>
      </div>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-1 gap-12 lg:p-12 mx-auto max-w-[1358px]"
        style={{
          backgroundImage: "url(/Backlights.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {PRODUCT_ARRAY.map((item) => (
          <span
            key={item.id}
            className="rounded-xl shadow-white/25 shadow-2xl px-4 lg:px-0"
          >
            <div className="flex">
              <img
                className="rounded-t-xl"
                alt="productImage"
                src={item.image}
                width="100%"
                height="220"
              />
            </div>
            <div className="bg-[#0F172A] rounded-b-xl flex-row space-y-4 py-8 px-4">
              <span className="font-bold text-2xl text-white block">
                {item.title}
              </span>
              <span className="font-normal text-lg text-white block">
                {item.description}
              </span>
              <button className="bg-transparent w-full justify-center flex p-4 rounded-lg text-xl font-medium hover:bg-white text-white hover:text-[#0F172A] border border-white hover:border-transparent">
                <Icons.Shop className="w-6 h-6 mr-2" /> Buy now
              </button>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Product;
