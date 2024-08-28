import React from "react";
import PageTitle from "../_components/PageTitle";
import ContactLinks from "../_components/ContactLinks";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col py-4 md:py-12">
      <div className="flex items-center justify-center md:justify-start flex-[0.5]">
        <PageTitle text="Contact Me" />
      </div>
      <div className="flex flex-1 flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 pr-4 text-lg">
          {`I'm always eager to take on new and exciting projects, so if you have
          something in mind or need assistance with your next digital venture,
          please feel free to reach out. Let's collaborate and bring your vision
          to life. Together, we can create an exceptional online presence that
        exceeds your expectations.`}
        </div>
        <div className="md:w-1/2 items-center justify-center mt-4 flex flex-col space-y-4 pl-4">
          <div>
            <a className="" href="/resume.pdf" download="saffan-resume.pdf">
              <button className="border-2 px-4 py-2 hover:bg-teal-700">
                Download Resume
              </button>
            </a>
          </div>
          <div className="justify-center">
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
