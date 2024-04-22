import React from "react";
import MultiCarousel from "./MultiCarousel";
import Icons from "components/Icons";

const Feedbacks = () => {
  const FEEDBACK_DATA = [
    {
      id: 1,
      icon: <Icons.Podcast className="w-8 h-8" />,
      company: "Zoomerr",
      name: "Hellen Jummy",
      jobTitle: "Team Lead",
      profileImg: "https://avatar.iran.liara.run/public/43",
      message:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    },
    {
      id: 2,
      icon: <Icons.Podcast className="w-8 h-8" />,
      company: "SHELLS",
      name: "Hellena John",
      jobTitle: "Co-founder",
      profileImg: "https://avatar.iran.liara.run/public/43",
      message:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    },
    {
      id: 3,
      icon: <Icons.Podcast className="w-8 h-8" />,
      company: "ArtVenue",
      name: "David Oshodi",
      jobTitle: "Manager",
      profileImg: "https://avatar.iran.liara.run/public/43",
      message:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    },
    {
      id: 4,
      icon: <Icons.Podcast className="w-8 h-8" />,
      company: "Waves",
      name: "Charolette Hanlin",
      jobTitle: "CEO",
      profileImg: "https://avatar.iran.liara.run/public/43",
      message:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    },
    {
      id: 5,
      icon: <Icons.Podcast className="w-8 h-8" />,
      company: "kontrastr",
      name: "Ralph Edwards",
      jobTitle: "Product Designer",
      profileImg: "https://avatar.iran.liara.run/public/43",
      message:
        "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
    },
  ];

  return (
    <>
      <div className="lg:-mb-48 mx-auto max-w-7xl px-6 lg:px-6 lg:mt-0 mt-28">
        <span className="font-extrabold lg:text-6xl text-3xl text-[#0F172A] block mb-4">
          Because they love us
        </span>
      </div>
      <MultiCarousel data={FEEDBACK_DATA} />
    </>
  );
};

export default Feedbacks;
