import React from "react";
import { Icons, Section } from "components";

const Features = () => {
  const FEATURES_DATA = [
    {
      id: 1,
      icon: <Icons.Cup className="text-amber-900" />,
      title: "Nibh viverra",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      id: 2,
      icon: <Icons.Cursus className="mt-5 text-amber-900" />,
      title: "Cursus amet",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      id: 3,
      icon: <Icons.Tv className="mt-10 text-amber-900" />,
      title: "Ipsum fermentum",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: "url(/Rectangle.png)",
        backgroundSize: "cover",
      }}
    >
      <Section />
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-12 mt-12 pt-24 lg:pb-48 pb-20 gap-8 bg-amber-100 lg:bg-transparent">
        {FEATURES_DATA.map((item) => (
          <span key={item.id} className="space-y-4 py-12 lg:text-start text-center">
            <div className="flex lg:justify-start justify-center">{item.icon}</div>
            <span className="font-medium text-[20px] text-[#0F172A] block">
              {item.title}
            </span>
            <span className="font-normal text-[18px] text-[#0F172A] block">
              {item.description}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
