import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="my-12">
      <p className="text-teal-700 text-4xl pb-2 font-bold">Contact</p>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4 text-lg">
          I'm always eager to take on new and exciting projects, so if you have
          something in mind or need assistance with your next digital venture,
          please feel free to reach out. Let's collaborate and bring your vision
          to life. Together, we can create an exceptional online presence that
          exceeds your expectations.
        </div>
        <div className="md:w-1/2 items-center mt-4 flex flex-row-reverse pl-4">
          <a className="mx-8" href="/resume.pdf" download="saffan-resume.pdf">
            <button className="border-2 border-teal-700 text-teal-700 px-4 py-2 text-white hover:bg-teal-700">
              Download Resume
            </button>
          </a>
          <ul className="flex">
            <li className="mr-2">
              <a href="https://github.com/SaffanBaig" target="_blank">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="40px"
                  width="40px"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.linkedin.com/in/saffanbaig/" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="40px"
                  width="40px"
                >
                  <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                </svg>
              </a>
            </li>
            <li className="mr-2">
              <a href="mailto:mirzasaffan492@gmail.com">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="40px"
                  width="40px"
                >
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
