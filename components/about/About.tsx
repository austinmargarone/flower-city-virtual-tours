import React from "react";
import Tech from "./Tech";

const About = () => {
  return (
    <article className="flex justify-center flex-col">
      <div>
        <h1 className="flex justify-center">About</h1>
        <p className="flex justify-center">
          We use modern tech stacks to deliver industry leading producsts to our
          customers.
        </p>
      </div>
      <div>
        <Tech />
      </div>
    </article>
  );
};

export default About;
