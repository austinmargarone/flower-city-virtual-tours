import React from "react";

interface Props {
  VirtualTours: {
    embed: string;
  };
}

const VirtualTourCards = ({ VirtualTours }: Props) => {
  const { embed } = VirtualTours;

  return (
    <div className="w-full">
      <iframe
        src={embed}
        allow="xr-spatial-tracking"
        allowFullScreen
        className="w-full h-[33rem] sm:h-[35rem] md:h-[41rem] lg:h-[45rem] max-w-[77.5rem] mx-auto flex border-tan border-rounded border shadow-lg rounded-lg"
      ></iframe>
    </div>
  );
};

export default VirtualTourCards;
