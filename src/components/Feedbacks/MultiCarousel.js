import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      centerMode={true}
      itemClass="xs:!w-[365px]"
      className="p-4 pt-24 -z-10 mt-32"
    >
      {data.map((item) => (
        <div className="pr-6 py-5">
          <div className="bg-white rounded-2xl shadow-lg flex-row lg:p-8 p-6 space-y-8 h-[430px]">
            <span className="flex items-center space-x-2 my-4 text-2xl font-bold text-[#475569]">
              {item.icon} <span>{item.company}</span>
            </span>
            <p className="text-2xl font-normal line-clamp-5 text-ellipsis h-auto">
              {item.message}
            </p>
            <div className="flex space-x-4 items-center">
              <img
                src={`${item.profileImg}`}
                width={64}
                height={64}
                alt="profile"
                className="rounded-full"
              />
              <div className="">
                <p className="text-lg font-normal">{item.name}</p>
                <p className="text-[16px] font-normal">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MultiCarousel;
