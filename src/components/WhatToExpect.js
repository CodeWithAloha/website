import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getExpectations } from "@/data/webData";

const TextBlock = ({ src, width, height, title, text }) => {
  return (
    <div className=" flex-1 h-12 flex items-center flex-col ">
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="h-12 w-12"
      />
      <h3
        className="font-extrabold py-8 text-transparent lg:text-3xl text-xl
          font-montserat bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400"
      >
        {title}
      </h3>
      <p className="text-md xl:text-xl">{text}</p>
    </div>
  );
};

const WhatToExpect = () => {
  const [expectations, setExpectations] = useState([]);

  useEffect(() => {
    setExpectations(getExpectations());
  }, []);
  return (
    <div
      className=" flex flex-col items-center justify-center
           mt-40 text-center rounded-lg mx-10 pt-10 pb-[20rem]"
    >
      <h2 className=" text-4xl lg:text-6xl font-semibold font-satisfy  text-center py-20 ">
        What to expect at a meeting{" "}
      </h2>

      <div className="flex gap-10 flex-col xl:flex-row lg:pb-40 ">
        {expectations.map((expect) => (
          <TextBlock
            key={expect.id}
            src={expect.src}
            width={expect.width}
            height={expect.height}
            title={expect.title}
            text={expect.text}
          />
        ))}

        {/* <TextBlock
          src={oneImg}
          width={500}
          height={500}
          title="Meet & Greet"
          text="At every meeting, we come together from various locations, 
              united by a common goal. We begin by acknowledging the communities 
              we come from, ensuring that we set a respectful and inclusive environment. 
              Afterward, each of the group members introduces themselves and we all 
              discuss a question of the day."
        />

        <TextBlock
          src={twoImg}
          width={500}
          height={500}
          title="Project Updates"
          text="In our meetings, we keep everyone updated on project milestones, 
              challenges, and progress. We also give guests and partners a platform 
              to share their ongoing work, allowing us to expand our knowledge and impact. 
              By staying connected, we continuously improve our contribution to Hawaii."
        />

        <TextBlock
          src={threeImg}
          width={500}
          height={500}
          title="Breakout Rooms"
          text="During each meetup, we facilitate breakout rooms tailored to our projects 
                for targeted discussion and planning. Together in these rooms, we drive innovation 
                and progress, contributing to the growth and betterment of our community. Your insights 
                can make a real difference – let's achieve greatness together!"
        /> */}
      </div>
    </div>
  );
};

export default WhatToExpect;
