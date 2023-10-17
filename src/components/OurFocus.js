import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getFocus } from "@/data/webData";

const TextBlock = ({
  src,
  alt,
  width,
  height,
  title,
  text,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-10 px-4 lg:px-10 flex-col xl:flex-row ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-100 xl:p-10 pt-20"
      />
      <div className="max-w-lg">
        <h4 className="xl:text-5xl text-3xl font-semibold mb-10 text-center font-satisfy">
          {title}
        </h4>
        <p className="text-md xl:text-xl">{text}</p>
      </div>
    </div>
  );
};

const OurFocus = () => {
  const [focus, setFocus] = useState([])

  useEffect(() => {
    setFocus(getFocus())
  }, []);

  return (
    <>
      <div className="  bg-white/20 text-center rounded-lg shadow-xl pt-10 pb-20 mt-24">
        <h2
          className=" xl:text-7xl py-8   text-center text-transparent  text-4xl  bg-clip-text 
          bg-gradient-to-r from-yellow-400 to-red-600"
        >
          {" "}
          Our focus{" "}
        </h2>

        
        {focus.map((topic) => (
          <TextBlock
          key={topic.id}
          src={topic.src}
          alt={topic.alt}
          width={topic.width}
          height={topic.height}
          title={topic.title}
          text={topic.text}
        />
        ))}
      </div>
    </>
  );
};

export default OurFocus;
