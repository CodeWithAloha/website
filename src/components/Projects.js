import React, { useState } from "react";
import Image from "next/image";
import HistoricalProjects from "./HistoricalProjects";
import Clients from "./Clients";
import { IoCloseSharp } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";

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
  hasWebsite,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInformation = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div
        className="relative flex-1 flex items-center  
        pb-8 flex-col text-center rounded-sm"
        key={id}
        onClick={toggleMoreInformation}>
        <Image
          src={src}
          alt={title}
          className={`${className} rounded-sm mb-2`}
          width={300}
          height={300}
        />
        <h5 className="font-semibold text-3xl py-6">{title} </h5>
        <p className=" w-3/5  text-md xl:text-xl">{text}</p>
      </div>

      {/* show project details */}
      {showMore && (
        <div
          className="fixed h-fit top-12 bottom-12 right-8 left-8 z-[1500] w-[90%] mx-auto
              animate-slide-in rounded-sm shadow-xl border border-slate-500/40
              py-12 overflow-y-hidden bg-white  text-sm transition-all ease-in-out 
              flex flex-col items-center justify-center gap-2
              md:left-12 md:right-12 xl:w-1/2 2xl:bottom-[10rem] 2xl:top-[10rem]">
          <button
            onClick={toggleMoreInformation}
            className="absolute top-4 right-8 text-xl hover:scale-105 opacity-80 hover:opacity-100">
            <IoCloseSharp />
          </button>
          <h2
            className="md:hidden text-xl font-bold pb-4 mt-2 md:pb-12  uppercase">
            {title}
          </h2>
          <div
            className="flex flex-col-reverse items-center 
          md:flex-row-reverse justify-between gap-2 pb-2 
          md:pb-12">
            <div className="flex flex-col items-center justify-center ">
              <h2
                className="hidden md:block text-center text-xl font-bold  md:pb-6
              uppercase">
                {title}
              </h2>
              <p
                className="hidden text-center pb-4 lg:max-w-[300px] md:block md:w-2/3 md:pb-4
              2xl:w-[90%]">
                {text}
              </p>
              <a
                href={github}
                target="_blank"
                className="flex flex-row items-center justify-center gap-1 mb-2 
                   px-4 py-2 bg-orange-300 w-[180px] rounded-md">
                <BsCodeSlash />
                View on GitHub
              </a>
              {hasWebsite ? (
                <a
                  href={live}
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-2 text-md 
                   px-4 py-2 bg-cyan-700 w-[180px] rounded-md text-white">
                  <MdLiveTv />
                  Live website
                </a>
              ) : null}
            </div>

            <Image
              src={src}
              alt={title}
              className={`${className} w-auto h-[160px] md:h-[200px] rounded-sm mb-2 2xl:h-[300px]`}
              width={500}
              height={500}
            />
          </div>
          <div className="w-[80%] pt-4">
            <h3 className="font-semibold self-start  pb-1">
              What is this project about?
            </h3>
            <p className="text-[.8rem] pb-4">{about}</p>
            <h3 className="font-semibold self-start pb-1">
              What are the project goals?
            </h3>
            <p className="text-[.8rem]">{goals}</p>
          </div>
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
      <Image
        src="/assets/projectsAssets/projects.png"
        alt="Project icon"
        className="mt-20"
        width={50}
        height={50}
      />
      <h2 className="text-4xl xl:text-7xl drop-shadow-xl text-center">
        Active projects
      </h2>

      <p className="text-md xl:text-xl  py-4 text-center w-2/3 pb-20">
        Here are some projects we are currently working on. Click on a project
        for details. If you have an idea for a civic project email us and
        let&apos;s make it happen!
      </p>

      <div className=" flex pt-10  gap-20 flex-col xl:flex-row">
        <ProjectCard
          id="hza"
          src="/assets/projectsAssets/HawaiiZoningAtlas.png"
          title="Hawaii Zoning Atlas"
          text="An interactive map exploring how restrictive zoning laws can make it
           difficult to build diverse, affordable housing."
          about="Building an online-interactive map to educate the public on zoning and 
           land use issues. Our vision is to connect researchers, educators, and advocates."
          goals="The project&apos;s goals are to build an interactive online map to educate 
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
          src="/assets/projectsAssets/habitat-full.jpg"
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
          src="/assets/projectsAssets/HIERR.png"
          title="HIERR"
          text="The HIERR (Hawaiʻi Economic Recovery & Resilience) Project aims to enable actions toward a more resilient,
            equitable, and sustainable economy."
          about="The HIERR Project aims to enable actions toward a more resilient, equitable, and sustainable economy. 
          This planning process is designed to learn from the economic impacts and experiences of hardship associated 
          with the COVID-19 pandemic to inform and enable actions toward a more resilient, equitable, and sustainable economy."
          goals="The CFH project is focused on developing a digital engagement platform via Pol.is and 
          onboarding materials to solicit resident sentiments on vision and value statements for Hawaii&apos;s 
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
