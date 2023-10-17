import React, { useEffect, useState } from "react";
import { ProjectCard } from "./Projects";
import { getHistoricalProjects } from "@/data/webData";
// import foodOasisImg from "../images/foodoasis.jpg";
// import uipaImg from "../images/uipa.jpg";

const HistoricalProjects = () => {
  const [histProjects, setHistProjects] = useState([]);

  useEffect(() => {
    setHistProjects(getHistoricalProjects())
  }, [])
  return (
    <div className="pt-20">
      {/* <img src="./assets/projectsAssets/historicalprojects.png" className="h-40 mt-20 mx-auto" /> */}
      <h2 className="text-4xl xl:text-7xl drop-shadow-xl text-center py-20">
        Historical projects
      </h2>
      <div className=" flex gap-10 flex-col xl:flex-row ">
        {histProjects.map((project) => (
        <ProjectCard
        key={project.id}
        src={project.src}
        width={project.width}
        height={project.height}
        title={project.title}
        text={project.text}
      />

        ))}
        {/* <ProjectCard
          src={foodOasisImg}
          width={400}
          height={300}
          title="FOOD OASIS"
          text="Resource for Community Food Help"
        />

        <ProjectCard
          src={uipaImg}
          width={400}
          height={300}
          title="UIPA.ORG"
          text="Publishes public records and request"
          className="max-h-1/2"
        /> */}
      </div>
    </div>
  );
};

export default HistoricalProjects;
