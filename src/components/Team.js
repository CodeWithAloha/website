import React from "react";
import Image from "next/image";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import data from "contributors.json";

const uniqueNames = []; // to avoid duplicates and bot names

// Loop through the each Repo
for (const repos in data.contributors) {
  // Loop through the each Repo's contributors and add all to a list
  const repoContributors = data.contributors[repos];

  // Loop through the all of the contrubtors to grab each individual contributor
  for (const contributor of repoContributors) {
    const name = contributor.name;

    // Check if the name is not already in the uniqueNames array as well as the dependabot[bot]
    if (!uniqueNames.includes(name) && name !== "dependabot[bot]") {
      uniqueNames.push(name + "\n");
    }
  }
}

export const TeamMember = ({ src, name }) => {
  return (
    <div className="flex flex-col justify-center m-8 text-center hover:scale-105">
      {/* 
      <Image
        alt=""
        className="self-center  flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
        src={src}
      /> */}

      <div className="flex flex-row items-center justify-center py-2">
        <AiOutlineGithub fontSize="2rem" />
        <h2 className="pl-2 text-md xl:text-xl">Contributors:</h2>{" "}
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-4 pl-4">
          {uniqueNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      {/* <p className="text-md xl:text-xl font-semibold leading-tight">{uniqueNames}</p> */}
    </div>
  );
};

const Team = () => {
  return (
    <>
      <h4 className=" text-4xl lg:text-5xl font-semibold font-satisfy w-full text-center xl:pt-20 mt-20 mb-8 ">
        Be part of our story
      </h4>
      <p className="text-sm xl:text-xl py-4 lg:px-12 text-center  xl:w-1/2">
        You can join any
        <a
          href="#join"
          className="text-orange-500 hover:text-cyan-400 hover:underline underline-offset-4 px-2"
        >
          MeetUp
        </a>{" "}
        event and be part of the Code with Aloha team. We meet the first three
        Mondays of every month. Join us, even just to say Aloha!
      </p>
      <div className="flex flex-row items-center justify-center py-2">
        <AiOutlineMail fontSize="2rem" />
        <h2 className="pl-2 text-md xl:text-xl">Email:</h2>{" "}
      </div>
      <h2 className="text-md xl:text-xl px-2">codewithaloha@gmail.com</h2>{" "}
    </>
  );
};

export default Team;
