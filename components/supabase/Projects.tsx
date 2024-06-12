"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

const Test = () => {
  const [Projects, setProjects] = useState<any[]>([]);
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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="h2">Projects</h1>
      <ul className="flex items-center flex-col sm:flex-row flex-wrap mx-auto justify-center gap-[3rem]">
        {Projects.map((note: any) => (
          <li key={note.id} className="mb-[1rem]">
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <Image src={note.image} alt={note.title} width={80} height={20} />
            <Link href={note.link}>Click</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
