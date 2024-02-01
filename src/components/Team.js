import React from "react";
import Image from "next/image";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import data from "contributors.json";

// Function to filter out dependabot
function filterContributors(contributors) {
  return contributors.filter(
    (contributor) => contributor.username !== "dependabot[bot]",
  );
}

// Create a Map to store unique contributors with the username as the key
const uniqueContributors = new Map();

// Loop through the each Repo
for (const repo in data.contributors) {
  const repoContributors = filterContributors(data.contributors[repo]);

  // Loop through the filtered contributors to grab each individual contributor
  for (const contributor of repoContributors) {
    const name = contributor.username;
    const avatar = contributor.avatar_url;
    const url = contributor.url;

    // Check if the username is already in the Map to avoid duplicates
    if (!uniqueContributors.has(name)) {
      uniqueContributors.set(name, { name, avatar, url });
    }
  }
}

// Convert the Map values to an array to get the unique contributors
const uniqueContributorsArray = [...uniqueContributors.values()];

// ! not yet responsive

export const TeamMember = ({ src, name }) => {
  return (
    <div className="flex flex-col justify-center m-8 text-center">
      {/* 
      <Image
        alt=""
        className="self-center  flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
        src={src}
      /> */}

      <div className="flex flex-row items-center justify-center py-2">
        <AiOutlineGithub fontSize="2rem" />
        <h2 className="pl-2 py-8 text-md xl:text-xl">Contributors:</h2>{" "}
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pl-4">
        {uniqueContributorsArray.map((contributor, index) => (
          <li key={index}>
            <a target="_blank" href={contributor.url}>
              <h2 className="pl-2 py-2 text-md xl:text-xl hover:text-cyan-400 hover:underline">
                {contributor.name}
              </h2>

              {/* Below is a bolder username design */}
              {/* <h2 className="pl-2 py-2 text-md xl:text-xl bg-gradient-to-tr from-orange-400 to bg-yellow-200  hover:underline">{contributor.name}</h2> */}
            </a>
            <Image
              src={contributor.avatar}
              alt={`This is ${contributor.name}'s picture`}
              className={
                "relative flex-1 flex items-center pb-8 flex-col text-center rounded-sm"
              }
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
      <div></div>
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
      <h2 className="text-md xl:text-xl px-2">
        <a href="mailto:codewithaloha@gmail.com">codewithaloha@gmail.com</a>
      </h2>
    </>
  );
};

export default Team;
