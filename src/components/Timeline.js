import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import TimelineIcon from "./TimelineIcon";


const Details = ({ src, date, title, text }) => {
  const ref=useRef(null)
  return (
    <li
      ref={ref}
      className="py-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-row items-start justify-between"
    >
      <div className=" flex flex-row items-start justify-center">
        <TimelineIcon reference={ref} />
        <div>
          <h3 className="font-semibold pb-6 text-left text-md xl:text-xl text-orange-400">
            {date}
          </h3>
          <h4 className="capitalize font-bold text-2xl text-left">{title}</h4>
          <p className="font-medium w-full pt-4 text-md xl:text-xl text-left">
            {text}
          </p>
        </div>
      </div>
    </li>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center start"],
  });
  
const scaleY = useSpring(scrollYProgress);
  return (
    <section className=" min-h-screen  lg:py-60 bg-gradient-to-tr from-cyan-200 to bg-white-200">
      <div className="  bg-white/80 md:w-2/3 w-full mx-auto  text-center md:rounded-lg shadow-xl xl:w-1/2">
        <h2
          className=" xl:text-8xl pt-20  text-center text-transparent text-5xl bg-clip-text 
        bg-gradient-to-r from-yellow-400 to-red-600"
        >
          Our timeline
        </h2>
        <p className="text-md xl:text-xl font-thin pt-4 text-center pb-20">
          A brief history of Code with Aloha
        </p>

        <div ref={ref} className="relative w-full  ">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-10 xl:left-20 top-10 w-1 h-[81%]  origin-top 
            bg-gradient-to-b from-yellow-200 to-orange-500 animate-pulse"
          />

          <ul className="w-full flex flex-col items-start justify-between pb-[120px]">
            <Details
              src="./assets/timeline-1.jpg"
              date="2009"
              title="Humble beginnings"
              text="Code for Hawaii was being born from idea to family."
            />
            <Details
              src="./assets/timeline-2.jpg"
              date="2011"
              title="First Civic App Released"
              text="We made it offical and released our first app aimed to help and improve our community.”"
            />
            <Details
              src="./assets/timeline-3.jpg"
              date="2012"
              title="Code for America"
              text="Honolulu Organizes CityCamp 2012. That was the first local event to introduce Code for America, a national organization that aims to build open source technology and organize a network of people dedicated to making government services simple, effective, and easy to use."
            />

            <Details
              src="./assets/timeline-4.jpg"
              date="August 2012"
              title="Code for Hawaii joins the brigade!"
              text="Code for Hawaii joins the inaugural cohort of Brigades along with Portland, ME; Austin; Boston; Lexington; Philly; Chicago; Denver; San Diego; Grand Rapids; Detroit; Arlington; Asheville; Oakland; Bend; Alexandria"
            />

            <Details
              src="./assets/timeline-5.jpg"
              date="2015"
              title="Leadership reboot"
              text="Code for Hawaii welcomes a reboot and new leadership."
            />

            <Details
              src="./assets/timeline-6.png"
              date="2020"
              title="Kaiulu Strategic Promise Developed"
              text="Code for Hawaii develops Kaiulu Strategic Promise and clarifies strategic vision for the organization going forward!"
            />

            <Details
              src="./assets/timeline-7.png"
              date="June 2023"
              title="Code for America Brigade Cancellation"
              text="Code for America cancels the local brigades program. Code for Hawaii rebrands as Code With Aloha."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
