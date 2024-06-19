import Link from "next/link";
import React from "react";

type Link = {
  type: string;
  url: string;
};
type Project = {
  name: string;
  description: string;
  projectLink: string;
  techUsed: string[];
  projectImage: string;
  links: Link[];
};
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row my-8 gap-4 justify-between">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-teal-700 line-height-[3rem] mb-4">
          {project.name}
        </h2>
        <p className="text-small text-white my-4">{project.description}</p>
        <p>
          <span>Technologies: </span>{" "}
          <span className="text-white text-small">
            {project?.techUsed && project.techUsed.join(", ")}
          </span>
        </p>
        <div className="flex mt-2 gap-4">
          {project?.links.map((data) => (
            <a target="_blank" href={data.url}>
              {data.type === "website" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M19 6.41L8.7 16.71a1 1 0 11-1.4-1.42L17.58 5H14a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-2 0V6.41zM17 14a1 1 0 012 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7c0-1.1.9-2 2-2h5a1 1 0 010 2H5v12h12v-5z"></path>
                </svg>
              )}
              {data.type === "github" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 max-h-[300px] max-w-[600px]">
        <Link href={project.projectLink}>
          <img
            src={project.projectImage}
            alt={project.name}
            className="w-full h-full transition duration-300 ease-in-out hover:opacity-50 hover:filter hover:brightness-75"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
