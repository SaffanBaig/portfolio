import React from "react";
import PageTitle from "../_components/PageTitle";
import ProjectData from "../../../data/project.json";
import ProjectCard from "@/app/components/ui/projectcard";

export default function Project() {
  return (
    <section id="projects" className="min-h-screen py-4 md:py-16">
      <PageTitle text="Projects" />
      <div className="">
        {ProjectData.map((project, index) => (
          <>
            <ProjectCard key={index} project={project} />
            <hr />
          </>
        ))}
      </div>
    </section>
  );
}
