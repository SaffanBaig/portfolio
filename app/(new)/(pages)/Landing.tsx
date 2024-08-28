import Image from "next/image";
import React from "react";
import ContactLinks from "../_components/ContactLinks";
import PageTitle from "../_components/PageTitle";
import Button from "../_components/Button";

const Landing = () => {
  return (
    <section
      id="home"
      className="h-full min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:justify-between"
    >
      <div>
        <div className="rounded-full h-60 w-60 border border-light overflow-hidden">
          <Image
            src={"/bill.jpg"}
            alt="bill"
            height={100}
            width={100}
            className="h-60 w-60 hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <PageTitle text="Hey! I'm Saffan Baig" />

        <p className="text-lg md:text-2xl">
          I am a Software Engineer specializing in Javascript and React. I make
          interactive web applications with goal to deliver high quality code
          and user experience.
        </p>
        <ContactLinks />
        <div className="flex gap-4">
          <Button text="See my work" href="#projects" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
