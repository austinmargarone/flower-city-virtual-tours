"use client";
import React, { useRef, useState, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollWidth > clientWidth + scrollLeft);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className="flex justify-center flex-col gap-[1rem]">
        <h2 className="h2mobile sm:h2">Main Tech Stack</h2>
        <div className="flex justify-center relative">
          <div
            className="overflow-x-hidden flex gap-[1.25rem] h-fit"
            ref={scrollRef}
          >
            <SkillTile StackImage={NextIcon} />
            <SkillTile StackImage={ReactIcon} />
            <SkillTile StackImage={ReduxIcon} />
            <SkillTile StackImage={JS} />
            <SkillTile StackImage={TSIcon} />
            <SkillTile StackImage={HTMLIcon} />
            <SkillTile StackImage={CSSIcon} />
            <SkillTile StackImage={MongodbIcon} />
            <SkillTile StackImage={SassIcon} />
            <SkillTile StackImage={MaterialIcon} />
            <SkillTile StackImage={TailwindIcon} />
            <SkillTile StackImage={MotionIcon} />
            <SkillTile StackImage={GitIcon} />
            <SkillTile StackImage={GitHubIcon} />
            <SkillTile StackImage={NodeIcon} />
            <SkillTile StackImage={ExpressIcon} />
          </div>
          {showLeftButton && (
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md"
              onClick={scrollLeft}
            >
              {"<"}
            </button>
          )}
          {showRightButton && (
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md"
              onClick={scrollRight}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tech;
