import React, { useState } from "react";
import Image from 'next/image'
import HistoricalProjects from "./HistoricalProjects";
import Clients from "./Clients";


export const ProjectCard = ({ src, title, text, className = "" , handleClick}) => {
  return (
    <div
      className="relative flex-1 flex items-center  pb-8 flex-col text-center rounded-xl 
     "
      onClick={handleClick}
    >
      <Image src={src} alt={alt} className={`${className}  w-2/3 rounded-lg`} />
      <h5 className="font-semibold text-3xl py-6">{title} </h5>
      <p className=" w-3/5  text-md xl:text-xl">{text}</p>
    </div>
  );
};

const Projects = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <section
      id="projects"
      className=" flex flex-col items-center xl:p-20 px-5 bg-gradient-to-br from-cyan-200 to bg-white-200"
    >
      {/* _________open a projects for details_________________ */}

      {isOpen ? (
        <div
          className=" w-[90%] h-[90%] flex p-20  flex-col justify-between items-end fixed 
      top-0 right-0  z-30 bg-white/90 rounded-b-lg backdrop-blur-md "
        ></div>
      ) : null}

      <Image
        alt=""
        src="./assets/projectsAssets/projects.png"
        className="lg:h-40 h-24 mt-20"
      />
      <h2 className="text-4xl xl:text-7xl drop-shadow-xl text-center">
        Active projects
      </h2>

      <p className="text-md xl:text-xl  py-4 text-center w-2/3 pb-20">
        Here are some projects we are currently working on. Click on a project
        for details. If you have an idea for a civic project email us and let&apos;s
        make it happen!
      </p>

      <div className=" flex pt-10  gap-20 flex-col xl:flex-row">
        <ProjectCard
          src="./assets/projectsAssets/HawaiiZoningAtlas.png"
          alt="hawaii zoning atlas illustration"
          title="Hawaii Zoning Atlas"
          text="An interactive map exploring how restrictive zoning laws can make it
            difficult to build diverse, affordable housing."
        />

        <ProjectCard
          src="./assets/projectsAssets/habitat-full.jpg"
          alt="habitat for humanity illustration"
          title="Habitat for Humanity"
          text=" A nonprofit organization that helps people
            in your community and around the world build or improve a place they
            can call home."
          className="max-h-1/2"
        />

        <ProjectCard
          src="./assets/projectsAssets/HIERR.png"
          alt="HIERR illustration"
          title="HIERR"
          text="The HIERR Project aims to enable actions toward a more resilient,
            equitable, and sustainable economy."
        />
      </div>
      <HistoricalProjects />
      <Clients />
    </section>
  );
};

export default Projects;
