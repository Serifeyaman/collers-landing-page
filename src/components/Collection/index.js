import Icons from "components/Icons";
import React from "react";

const Collection = () => {
  const DATA = [
    {
      id: 1,
      name: "Bibendum tellus",
      icon: <Icons.Search className="w-6 h-6 mr-2 text-[#0F172A]" />,
    },
    {
      id: 2,
      name: "Cras eget",
      icon: <Icons.ShieldCheck className="w-6 h-6 mr-2 text-[#0F172A]" />,
    },
    {
      id: 3,
      name: "Dolor pharetra",
      icon: <Icons.Rocket className="w-6 h-6 mr-2 text-[#0F172A]" />,
    },
    {
      id: 4,
      name: "Amet, fringilla",
      icon: <Icons.Screen className="w-6 h-6 mr-2 text-[#0F172A]" />,
    },
    {
      id: 5,
      name: "Amet nibh",
      icon: <Icons.Podcast className="w-6 h-6 mr-2 text-[#0F172A]" />,
    },
    {
      id: 6,
      name: "Sed velit",
      icon: <Icons.Settings className="w-6 h-6 mr-2 text-[#0F172A]" />,
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:py-20 py-10">
        <span className="font-extrabold lg:text-6xl text-3xl text-[#0F172A] block mb-8">
          Grow your collection
        </span>
        <span className="font-normal text-lg text-[#0F172A] text-center lg:text-start block lg:mb-8 mb-2">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </span>
      </div>

      <div
        style={{
          backgroundImage: "url(/Waves.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-48 grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-20">
          <ul className="space-y-3 mb-10 lg:mb-0 text-[#0F172A]">
            {DATA.map((item, _index) => (
              <li
                key={_index}
                className="flex space-x-4 p-4 hover:rounded-xl hover:bg-white hover:shadow-black/10 hover:shadow-md justify-between "
              >
                <span className="text-lg font-medium flex items-center">
                  {item.icon}
                  {item.name}
                </span>
                <Icons.RightArrow className="w-6 h-6 text-transparent hover:!text-[#0F172A]" />
              </li>
            ))}
          </ul>
          <div className="col-span-3">
            <img src="./Col.png" className="lg:w-[944px]" alt="sneaker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
