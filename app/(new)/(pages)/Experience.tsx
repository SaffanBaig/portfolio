import React from "react";
import ExperienceData from "../../../data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-4 md:py-16">
      <p className="text-4xl pb-4 font-bold">Experience</p>
      <div className="pt-4 border-l-4 border-teal-700 border-solid">
        {ExperienceData.map((exp) => (
          <div className="pl-2 mb-12" key={exp?.id}>
            <div className="relative">
              <div className="absolute w-8 h-8 border-4 bg-white rounded-full left-[-26px] flex items-center justify-center"></div>
            </div>
            <div className="ml-5">
              <h4 className="text-2xl font-bold">
                {exp.title}{" "}
                <span className="text-teal-700">@ {exp.company}</span>
              </h4>
              <p className="text-lg font-medium">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-lg font-medium">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
