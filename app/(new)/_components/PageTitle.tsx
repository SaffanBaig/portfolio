import React from "react";

export default function PageTitle({ text }: { text: string }) {
  return (
    <h1 className="font-bold text-5xl text-center md:text-left">{text}</h1>
  );
}
