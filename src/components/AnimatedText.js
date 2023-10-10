import React from "react";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-2 items-center justify-center text-center
    overflow-hidden"
    >
      <h1
        className={`inline-block w-full font-bold capitalize text-8xl ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <span key={word + "-" + index}>
            {word}&nbsp; //add space after every word
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
{
  text, (className = "");
}
