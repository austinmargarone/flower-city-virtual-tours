import Image from "next/image";
import React from "react";

interface Props {
  ServiceData: {
    src: string;
    alt: string;
    name: string;
    description: string;
  };
}

const SmallServiceCards: React.FC<Props> = ({ ServiceData }) => {
  const { src, alt, name, description } = ServiceData;

  return (
    <div className="bg-white h-[18rem] shadow-lg rounded-lg flex flex-col w-full p-[1rem] hover:shadow-lg hover:shadow-[#0D101E] min-w-[18rem] max-w-[25rem]">
      <div className="flex items-center justify-center">
        <Image src={src} alt={alt} width={150} height={150} />
      </div>
      <div className="flex flex-col">
        <h3 className="flex justify-center pt-[1.5rem]">{name}</h3>
        <p className="flex mt-[.25rem] text-center justify-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SmallServiceCards;
