import React from "react";
import Landing from "./(pages)/Landing";
import Skillset from "./(pages)/Skillset";
import Experience from "./(pages)/Experience";
import Project from "./(pages)/Project";
import Contact from "./(pages)/Contact";
import Nav from "./_components/Nav";
import MobileNav from "./_components/MobileNav";

const page = () => {
  return (
    <>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <div className="bg-gray-light h-full min-h-screen">
        <div className="px-8 md:px-60">
          <div className="hidden md:block">
            <Nav />
          </div>

          <Landing />
          <Skillset />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default page;
