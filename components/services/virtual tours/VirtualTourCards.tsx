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
        className="w-full h-[33rem] lg:h-[42rem] max-w-[74rem] mx-auto flex border-tan border-rounded border shadow-lg rounded-lg"
      ></iframe>
    </div>
  );
};

export default VirtualTourCards;
