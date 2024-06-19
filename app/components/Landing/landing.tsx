import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div id="home" className="h-screen flex flex-col">
      <p className="text-teal-700 text-4xl pb-2 font-bold">{`Hello World!`}</p>
      <p className="text-3xl md:text-6xl text-white py-8 font-extrabold">
        {`Hey! I'm Saffan Baig`}
      </p>
      <p className="max-w-[700px] text-xl">
        {`I am a Software Engineer specializing in Javascript and React. I make
        interactive web applications with goal to deliver high quality code and
        user experience.`}
      </p>
      <span className="gap-2 mt-16">
        <Link
          href="#projects"
          className="border border-teal-700 border-3 font-bold text-xl text-white mr-4 px-4 py-2"
        >
          See my work
        </Link>
        <Link href="#contact" className="text-white">
          Contact me!
        </Link>
      </span>
    </div>
  );
};

export default Landing;
