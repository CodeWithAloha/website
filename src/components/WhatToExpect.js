import React from 'react'
import Image from 'next/image'

const TextBlock =({src, width, height, title, text}) => {
    return (
      <div className=" flex-1 h-12 flex items-center flex-col ">
        <Image src={src} alt='' width={width} height={height} className="h-12 w-12" />
        <h5
          className="font-extrabold py-8 text-transparent lg:text-3xl text-xl
          font-montserat bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400"
        >
          {title}
        </h5>
        <p className="text-md xl:text-xl">{text}</p>
      </div>
    );
}

const WhatToExpect = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center
           mt-40 text-center rounded-lg mx-10 pt-10 pb-[20rem]"
    >
      <h4 className=" text-4xl lg:text-6xl font-semibold font-satisfy  text-center py-20 ">
        What to expect at a meeting{" "}
      </h4>

      <div className="flex gap-10 flex-col xl:flex-row lg:pb-40 ">
        <TextBlock
          src="/./assets/one.png"
          width={500}
          height={500}
          title="Meet & Greet"
          text="We start each meeting with a land acknowledgement, Code for
            Americaʻs Code of Conduct, and a full round of introductions
            including your name, where you are calling from and a question of
            the day."
        />

        <TextBlock
          src="/./assets/two.png"
          width={500}
          height={500}
          title="Debrief on projects and announcements"
          text="  We will share key milestones, updates, and blockers on projects as
            well as relevant news from Code for America including participating
            in national events such as Brigade Congress, National Day of Civic
            Hacking, and Code for America Summit. We also occasionally welcome
            guests and partners to share what they are working on so we can
            continue to learn about how to have impact in Hawaii."
        />

        <TextBlock
          src="/./assets/three.png"
          width={500}
          height={500}
          title="Participate in breakout rooms"
          text="Each month the brigade selects a Focus Project that we all work on
            together as a brigade. We also work on developing several other
            projects in the background through our Discovery Track. Each
            meetup we create breakout rooms as needed to drive toward our
            milestones on the Focus Project or explore projects in our
            Discovery Track."
        />
      
      </div>
      
    </div>
  );
}

export default WhatToExpect
