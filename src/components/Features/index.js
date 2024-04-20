import Icons from "components/Icons";
import React from "react";

const Features = () => {
  const FEATURES_DATA = [
    {
      id: 1,
      icon: <Icons.Cup className="w-[65px] h-[65px] text-amber-900" />,
      title: "Nibh viverra",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      id: 2,
      icon: <Icons.Cursus className="w-[65px] h-[65px] text-amber-900" />,
      title: "Cursus amet",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      id: 3,
      icon: <Icons.Tv className="w-[65px] h-[65px] text-amber-900" />,
      title: "Ipsum fermentum",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-12 my-12 gap-8">
      {FEATURES_DATA.map((item) => (
        <span key={item.id} className="space-y-4 py-12">
          <div>{item.icon}</div>
          <span className="font-medium text-[20px] text-[#0F172A] block">
            {item.title}
          </span>
          <span className="font-normal text-[18px] text-[#0F172A] block">
            {item.description}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Features;
