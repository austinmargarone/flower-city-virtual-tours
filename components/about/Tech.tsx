import React from "react";
import SkillTile from "./SkillTile";
import {
  CSSIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JS,
  MaterialIcon,
  MongodbIcon,
  MotionIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TSIcon,
  TailwindIcon,
} from "../svg";

const Tech = () => {
  return (
    <section>
      <div className="flex justify-center flex-col gap-[1rem]">
        <h2 className="h2">Our Main Tech Stack</h2>
        <div className="flex gap-[.75rem] justify-center">
          <SkillTile StackImage={JS} />
          <SkillTile StackImage={ReactIcon} />
          <SkillTile StackImage={ReduxIcon} />
          <SkillTile StackImage={NextIcon} />
          <SkillTile StackImage={TSIcon} />
          <SkillTile StackImage={HTMLIcon} />
          <SkillTile StackImage={CSSIcon} />
          <SkillTile StackImage={SassIcon} />
          <SkillTile StackImage={MaterialIcon} />
          <SkillTile StackImage={TailwindIcon} />
          <SkillTile StackImage={MotionIcon} />
          <SkillTile StackImage={GitIcon} />
          <SkillTile StackImage={GitHubIcon} />
          <SkillTile StackImage={NodeIcon} />
          <SkillTile StackImage={ExpressIcon} />
          <SkillTile StackImage={MongodbIcon} />
        </div>
      </div>
    </section>
  );
};

export default Tech;
