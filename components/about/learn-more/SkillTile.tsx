import React from "react";

const SkillTile = ({ StackImage }: { StackImage: any }) => {
  return (
    <div className="rounded-lg shadow-lg transition-transform duration-300 transform ">
      <div className="bg-gradient-to-br from-[#343A63] to-[#0D101E] p-2 flex items-center justify-center">
        <StackImage
          className="w-12 h-12 shadow-md hover:scale-105"
          width={48}
          height={48}
          alt="Stack Image"
        />
      </div>
    </div>
  );
};

export default SkillTile;
