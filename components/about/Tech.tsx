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
    <section className="">
      <div className="">
        <h2 className="">My Skills</h2>
        <div className="">
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
