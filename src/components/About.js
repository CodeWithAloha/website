import React from "react";
import WhatToExpect from "./WhatToExpect";
import Team from './Team'



const TextBlock = ({ src, alt, title, text, className="" }) => {
  return (
    <div
      className={`flex items-center justify-between gap-10 px-10 flex-col xl:flex-row ${className}`}
    >
      <img src={src} alt={alt} className="h-100 p-5" />
      <div className="max-w-lg">
        <h4 className="text-4xl font-semibold mb-2 text-center font-satisfy">
          {title}
        </h4>
        <p className="text-lg font-semibold">{text}</p>
      </div>
    </div>
  );
};



const About = () => {
  return (
    <>
      <section
        id="about"
        className=" bg-gradient-to-br from-cyan-200 to bg-white-200 
      flex flex-col items-center px-40 py-40"
      >
        <Team />
        
        <div className="  bg-white/70 p-50 text-center rounded-lg shadow-xl py-20">
          <h2
            className=" xl:text-7xl pt-2 pb-20  text-center text-transparent text-6xl bg-clip-text 
        bg-gradient-to-r from-yellow-400 to-red-600"
          >
            Our focus
          </h2>
          <TextBlock
            src="./assets/meet.png"
            alt="meet illustration"
            title="Meet new people"
            text="Meet supportive people like you who care. If you are passionate
              about helping others, Code With Aloha is perfect to support you."
          />

          <TextBlock
            src="./assets/progress.png"
            alt="make an impact illustration"
            title="Make a Difference"
            text="Make a difference contributing to Hawaiian social impact projects.
              Leverage technology to help organizations solve problems."
            className="xl:flex-row-reverse"
          />

          <TextBlock
            src="./assets/experience.png"
            alt="gain experience illustration"
            title="Gain Experience"
            text="Gain experience as a beginner, pay it forward as a mentor. We help
              each other grow and together we make a difference in our
              community."
          />
        </div>

        <WhatToExpect />
      </section>
    </>
  );
};

export default About;
