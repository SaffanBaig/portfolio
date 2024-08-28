import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing/landing";
import Techstack from "../components/Techstack/techstack";
import Experience from "../components/Experience/experience";
import Projects from "../components/Projects/projects";
import Contact from "../components/Contact/contact";
import styles from "./styles.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      {" "}
      <Nav />
      <div className="px-8 py-8 md:px-32">
        <Landing />
        <Techstack />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default page;
