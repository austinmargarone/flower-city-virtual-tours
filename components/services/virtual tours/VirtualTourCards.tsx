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
        className="w-full h-[33rem] max-w-[50rem] mx-auto flex border-black border-rounded border-[3px] shadow-lg rounded-lg"
      ></iframe>
    </div>
  );
};

export default VirtualTourCards;
