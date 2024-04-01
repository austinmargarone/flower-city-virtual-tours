import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  ServiceData: {
    src: string;
    alt: string;
    title: string;
    button: string;
    description: string;
  };
}

const SmallServiceCards: React.FC<Props> = ({ ServiceData }) => {
  const { src, alt, title, button, description } = ServiceData;

  return (
    <div className="bg-indigo h-[18rem] shadow-lg rounded-lg flex flex-col w-full p-[1rem] hover:shadow-lg hover:shadow-[#0D101E] min-w-[18rem] max-w-[25rem] border border-tan text-white">
      <div className="flex items-center justify-center h-[45%]">
        <Image src={src} alt={alt} width={115} height={115} />
      </div>
      <div className="flex flex-col h-[55%]">
        <h3 className="h3 flex justify-center">{title}</h3>
        <p className="p flex text-center justify-center">{description}</p>
        <div className="w-full button-container xs:pt-[.75rem]">
          <Link href={button}>
            <button className="p button-container w-full bg-[#B49167] shadow-lg p-[.25rem] rounded-[.17rem] text-dark-midnight h-[2rem] hover:text-black hover:font-bold">
              {title}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallServiceCards;
