import React, { useState } from "react";
import HistoricalProjects from "./HistoricalProjects";
import Clients from "./Clients";
import { IoCloseSharp } from "react-icons/io5";
import {BsCodeSlash} from 'react-icons/bs'
import {MdLiveTv} from 'react-icons/md'

export const ProjectCard = ({
  id,
  src,
  title,
  text,
  className = "",
  about,
  goals,
  github,
  live,
  hasWebsite
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInformation = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div
        className="relative flex-1 flex items-center  
        pb-8 flex-col text-center rounded-sm 
     "
        key={id}
        onClick={toggleMoreInformation}
      >
        <img
          src={src}
          alt={title}
          className={`${className}  w-2/3 rounded-sm`}
        />
        <h5 className="font-semibold text-3xl py-6">{title} </h5>
        <p className=" w-3/5  text-md xl:text-xl">{text}</p>
      </div>

      {/* show project details */}
      {showMore && (
        <div
          className="fixed top-4 bottom-4 right-2 left-2 z-[1500] w-[98%] mx-auto
               animate-slide-in rounded-sm
              bg-white p-4 text-sm 
              shadow-lg transition-all
              ease-in-out 
              overflow-y-scroll
              flex flex-col items-center justify-center gap-2
               md:bottom-24 md:top-24 md:left-12 md:right-12 md:w-[90%]
               lg:bottom-18
               xl:left-80 xl:right-80 xl:w-1/2
              "
        >
          <button
            onClick={toggleMoreInformation}
            className="absolute top-4 right-8 text-2xl lg:text-4xl"
          >
            <IoCloseSharp />
          </button>
          <h2 className="md:hidden text-xl font-bold pb-4 mt-2 md:pb-12 md:text-2xl uppercase">
            {title}
          </h2>
          <div
            className="flex flex-col-reverse items-center 
          md:flex-row-reverse justify-between gap-2 pb-2
          md:pb-12"
          >
            <div className="flex flex-col items-center justify-start 2xl:gap-6 2xl:pl-12">
              <h2
                className="hidden md:block text-center text-xl font-bold  md:pb-6 md:text-2xl 
              2xl:text-4xl uppercase"
              >
                {title}
              </h2>
              <p
                className="hidden text-center pb-4 lg:max-w-[300px] md:block md:w-2/3 md:pb-4
              2xl:text-xl 2xl:w-[90%] "
              >
                {text}
              </p>
              <a
                href={github}
                target="_blank"
                className="flex flex-row items-center justify-center gap-1 mb-2 
                   px-4 py-2 bg-orange-300 w-[180px] rounded-md 2xl:text-xl 2xl:w-[300px]"
              >
                <BsCodeSlash />
                View on GitHub
              </a>
              {hasWebsite ? (
                <a
                  href={live}
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-2 text-md 
                   px-4 py-2 bg-cyan-700 w-[180px] rounded-md text-white 2xl:text-xl 2xl:w-[300px]"
                >
                  <MdLiveTv />
                  Live website
                </a>
              ) : null}
            </div>

            <img
              src={src}
              alt={title}
              className={`${className} w-auto h-[160px] md:h-[300px] rounded-sm mb-2 2xl:h-[500px]`}
            />
          </div>
          <h3 className="font-semibold self-start lg:self-center 2xl:text-2xl">
            What is this project about?
          </h3>
          <p className="text-[.8rem] lg:w-1/2 lg:text-center xl:w-2/3 2xl:text-lg">
            {about}
          </p>
          <h3 className="font-semibold self-start lg:self-center 2xl:text-2xl">
            What are the project goals?
          </h3>
          <p className="text-[.8rem] lg:w-1/2 lg:text-center xl:w-2/3 2xl:text-lg">
            {goals}
          </p>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className=" flex flex-col items-center xl:p-20 px-5 bg-gradient-to-br from-cyan-200 to bg-white-200"
    >
      {/* _________open a projects for details_________________ */}

      {/* {isOpen ? (
        <div
          className=" w-[90%] h-[90%] flex p-20  flex-col justify-between items-end fixed 
      top-0 right-0  z-30 bg-white/90 rounded-b-lg backdrop-blur-md "
        > more infooooo</div>
      ) : null} */}

      <img
        src="./assets/projectsAssets/projects.png"
        className="lg:h-40 h-24 mt-20"
      />
      <h2 className="text-4xl xl:text-7xl drop-shadow-xl text-center">
        Active projects
      </h2>

      <p className="text-md xl:text-xl  py-4 text-center w-2/3 pb-20">
        Here are some projects we are currently working on. Click on a project
        for details. If you have an idea for a civic project email us and let's
        make it happen!
      </p>

      <div className=" flex pt-10  gap-20 flex-col xl:flex-row">
        <ProjectCard
          id="hza"
          src="./assets/projectsAssets/HawaiiZoningAtlas.png"
          title="Hawaii Zoning Atlas"
          text="An interactive map exploring how restrictive zoning laws can make it
            difficult to build diverse, affordable housing."
          about="Building an online-interactive map to educate the public on zoning and 
          land use issues. Our vision is to connect researchers, educators, and advocates."
          goals="The project's goals are to build an interactive online map to educate 
         the public on zoning and land use issues and generate talking points 
         for affordable housing advocates in Hawaii. Our second goal is to create 
         a website that serves as a hub for the resulting coalition of researchers, 
         educators, and advocates."
         
          github="https://github.com/CodeWithAloha/Hawaii-Zoning-Atlas"
          live="https://hawaiizoningatlas.com/#9/20.4162/-157.4015/"
          hasWebsite={true}
        />

        <ProjectCard
          id="hfu"
          src="./assets/projectsAssets/habitat-full.jpg"
          title="Habitat for Humanity"
          text=" A nonprofit organization that helps people
            in your community and around the world build or improve a place they
            can call home."
          className="max-h-1/2"
          about="Habitat for Humanity Leeward O`ahu (Leeward Habitat) is a local affiliate 
          of a world- wide organization that builds houses with volunteer labor and sells 
          those houses to very low-income families (those earning under 50% of the
             area median income). "
          goals="Habitat works to build homes in Leeward O`ahu which includes the areas of Kapolei, Ewa Beach, and Wai’anae. 
          It is our mission to eliminate substandard housing and homelessness in Leeward O`ahu."
          
          github="https://github.com/CodeWithAloha/LeewardHabitatForHumanity"
          live=""
          hasWebsite={false}
        />

        <ProjectCard
          id="hierr"
          src="./assets/projectsAssets/HIERR.png"
          title="HIERR"
          text="The HIERR (Hawaiʻi Economic Recovery & Resilience) Project aims to enable actions toward a more resilient,
            equitable, and sustainable economy."
          about="The HIERR Project aims to enable actions toward a more resilient, equitable, and sustainable economy. 
          This planning process is designed to learn from the economic impacts and experiences of hardship associated 
          with the COVID-19 pandemic to inform and enable actions toward a more resilient, equitable, and sustainable economy. 
          "
          goals="The CFH project is focused on developing a digital engagement platform via Pol.is and 
          onboarding materials to solicit resident sentiments on vision and value statements for Hawaii's 
          economic future. Residents will be invited to in-person workshops for onboarding and introduction 
          to the established Pol.is, where they will be invited to interact with seeded vision and value 
          statements as well as add new ones."
          github="https://github.com/CodeWithAloha/HIERR"
          live="https://hierr.vercel.app/"
          hasWebsite={true}
        />
      </div>
      <HistoricalProjects />
      <Clients />
    </section>
  );
};

export default Projects;
