"use client";
import React, { useState } from "react";
import NavItems from "../../../data/nav.json";

const Nav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <div className="py-4 text-white fixed top-10 right-[5%]">
        <button onClick={toggleNav}>
          <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`transition-all duration-500 ${
          showNav ? "top-0" : "-top-full"
        } h-screen w-screen fixed z-100 bg-teal-700 flex items-center justify-center text-center`}
      >
        {showNav && (
          <div
            className="fixed top-10 right-[5%] text-white hover:cursor-pointer"
            onClick={toggleNav}
          >
            <svg fill="none" viewBox="0 0 24 24" height="40px" width="40px">
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              ></path>
            </svg>
          </div>
        )}
        <ul className="pt-20">
          {NavItems.map((item, index) => (
            <li className="my-8" onClick={toggleNav} key={index}>
              <a href={item.url} className="text-5xl text-white font-bold">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
