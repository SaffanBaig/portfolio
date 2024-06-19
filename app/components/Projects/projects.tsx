import React from "react";
import ProjectData from "../../../data/project.json";
import ProjectCard from "../ui/projectcard";

const Projects = () => {
  return (
    <section id="projects" className="my-12">
      <p className="text-teal-700 text-4xl pb-2 font-bold">Projects</p>
      <div className="">
        {ProjectData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
