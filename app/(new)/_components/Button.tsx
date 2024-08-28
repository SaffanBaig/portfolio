"use client";
import Link from "next/link";
import React from "react";

export default function Button({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="border border-2 border-primary text-primary font-bold text-xl mr-4 px-4 py-2 rounded hover:scale-105"
    >
      {text}
    </Link>
  );
}
