"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";

const Test = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("projects").select();
      if (error) {
        console.error("Error fetching Projects:", error);
      } else {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading)
    return <div className="flex justify-center items-center">Loading...</div>;

  return (
    <div className="mx-auto">
      <h2 className="h2">Featured Web Applications</h2>
      <ul className="mt-[2.5rem] flex flex-col lg:flex-row gap-[2rem] lg:gap-[3rem] mx-auto justify-center flex-wrap">
        {projects.map((project: any) => (
          <div key={project.id}>
            <Link href={project.link} target={"_blank"} className="mx-auto">
              <div className="bg-tan mx-auto flex w-[20rem] shrink-0 flex-col rounded-[.62725rem] bg-blue1 pb-[.32rem] pt-[2.83rem] hover:shadow-lg xs:w-[21.5rem] ss:w-[25rem] sm:h-[20.8rem] sm:w-[34.375rem] sm:pt-[4.25rem]">
                <div className="mx-auto flex sm:hidden">
                  <div>
                    <Image
                      src={project.image}
                      width={290}
                      height={165}
                      alt="Computer"
                      className="h-[165px] w-[290px]"
                    />
                  </div>
                </div>
                <div className="mx-auto hidden sm:flex">
                  <div className="pt-[1rem]">
                    <Image
                      src={project.image}
                      width={430}
                      height={255}
                      alt="Computer"
                      className="h-[255px] w-[430px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[20rem] mx-auto flex pl-[1.25rem] pt-[1.22rem] sm:pl-[3.6rem] sm:pt-[1.95rem] xs:w-[21.5rem] ss:w-[25rem] sm:w-[34.375rem]">
                <div className="flex-col">
                  <h4 className="flex text-white">{project.title}</h4>
                  <p className="flex text-white">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Test;
