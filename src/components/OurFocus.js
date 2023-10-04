import React from "react";
import Image from 'next/image'

const TextBlock = ({ src, alt, width, height, title, text, className = "" }) => {
  return (
    <div
      className={`flex items-center justify-between gap-10 px-4 lg:px-10 flex-col xl:flex-row ${className}`}
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-100 xl:p-10 pt-20" />
      <div className="max-w-lg">
        <h4 className="xl:text-5xl text-3xl font-semibold mb-10 text-center font-satisfy">
          {title}
        </h4>
        <p className="text-md xl:text-xl">{text}</p>
      </div>
    </div>
  );
};

const OurFocus = () => {
  return (
    <>
      <div className="  bg-white/20 text-center rounded-lg shadow-xl pt-10 pb-20 mt-24">
        <h2
          className=" xl:text-7xl py-8   text-center text-transparent  text-4xl  bg-clip-text 
          bg-gradient-to-r from-yellow-400 to-red-600"
        >
          {" "}
          Our focus{" "}
        </h2>
        <TextBlock
          src="/./assets/meet.png"
          alt="meet illustration"
          width={500}
          height={283}
          title="Meet new people"
          text="Build with, not for. We are a community of people who are passionate
          about helping others. We are here to support each other and
          build together."
        />

        <TextBlock
          src="/./assets/progress.png"
          alt="make an impact illustration"
          width={500}
          height={266}
          title="Make a Difference"
          text="Nobody is coming to save us. It's up to us to impact our community and drive change.
          We are the ones we've been waiting for. We are the change that we seek."
          className="xl:flex-row-reverse"
        />

        <TextBlock
          src="/./assets/experience.png"
          alt="gain experience illustration"
          width={500}
          height={215}
          title="Gain Experience"
          text="Gain experience as a beginner, pay it forward as a mentor. We help
              each other grow and together we make a difference in our
              community."
        />
      </div>
    </>
  );
};

export default OurFocus;
