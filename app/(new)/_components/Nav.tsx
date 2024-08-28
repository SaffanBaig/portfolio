"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavItems from "../../../data/nav.json";
import classNames from "classnames";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("#landing");

  const handleScroll = () => {
    if (window.scrollY > 10) {
      // Adjust the scroll value as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    if (window === undefined) return;
    window.addEventListener("scroll", handleScroll);
    const url = window.location.href;
    let id = url.split("#")?.[1];
    if (id) {
      setCurrentPage(`#${id}`);
    } else {
      setCurrentPage("#landing");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-10 top-0 left-0 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white opacity-100 shadow-md"
          : "bg-transparent opacity-50"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center items-center">
          {NavItems.map((el, ind) => (
            <Link
              href={el.url}
              onClick={() => setCurrentPage(el.url)}
              key={`${el.name}+${ind}`}
              className={classNames(
                "px-4 py-2 hover:text-blue-900",
                el.url === currentPage && "font-bold text-black"
              )}
            >
              {el.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
