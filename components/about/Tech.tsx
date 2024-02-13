import React from "react";
import Image from "next/image";

const Tech = () => {
  const techStacks = [
    { name: "React", image: "/react-logo.png" },
    { name: "Next.js", image: "/nextjs-logo.png" },
    // Add more tech stacks as needed
  ];

  return (
    <article className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Our Tech Stack</h2>
      <div className="grid grid-cols-3 gap-4">
        {techStacks.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={tech.image} alt={tech.name} width={100} height={100} />
            <p className="mt-2 text-lg font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Tech;
