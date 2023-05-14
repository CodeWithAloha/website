import React, { useState } from "react";
import HistoricalProjects from "./HistoricalProjects";
import Clients from "./Clients";


export const ProjectCard = ({ src, title, text, className = "" , handleClick}) => {
  return ( 
    <div
      className="relative flex-1 flex items-center  pb-4 flex-col text-center rounded-xl 
     "
      onClick={handleClick}
    >
      <img src={src} className={`${className}  w-2/3 rounded-xl`} />
      <h5 className="font-semibold text-xl py-6">{title} </h5>
      <p className="font-semibold w-4/5  text-lg">{text}</p>
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
      className=" flex flex-col items-center xl:p-20 px-20 bg-gradient-to-br from-cyan-200 to bg-white-200"
    >

{/* _________open a projects for details_________________ */}

     {isOpen ? (
        <div
          className=" w-[90%] h-[90%] flex p-20  flex-col justify-between items-end fixed 
      top-0 right-0  z-30 bg-white/90 rounded-b-lg backdrop-blur-md "
        ></div>) : null}

      <img src="./assets/projectsAssets/projects.png" className="h-40 mt-20" />
      <h2 className="text-5xl xl:text-7xl drop-shadow-xl text-center">
        Active projects
      </h2>

      <p className="text-lg font-semibold py-10 text-center w-2/3 pb-20">
        Here are some projects we are currently working on. Click on a project
        for details. If you have an idea for a civic project{" "}
        <a
          href="#contact"
          className="text-cyan-400 hover:text-orange-500 hover:underline underline-offset-4"
        >
          email us
        </a>{" "}
        and let's make it happen!
      </p>

      <div className=" flex pt-20  gap-20 flex-col xl:flex-row">
        <ProjectCard
          src="./assets/projectsAssets/HawaiiZoningAtlas.png"
          title="Hawaii Zoning Atlas"
          text="An interactive map exploring how restrictive zoning laws can make it
            difficult to build diverse, affordable housing."
        />

        <ProjectCard
          src="./assets/projectsAssets/habitat-full.jpg"
          title="Habitat for Humanity"
          text=" A nonprofit organization that helps people
            in your community and around the world build or improve a place they
            can call home."
          className="max-h-1/2"
        />

        <ProjectCard
          src="./assets/projectsAssets/HIERR.png"
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
