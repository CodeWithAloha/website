import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import TimelineIcon from "./TimelineIcon";
import { getTimeline } from "@/data/webData";
// import timeline1Img from "../images/timeline-1.jpg";
// import timeline2Img from "../images/timeline-2.jpg";
// import timeline3Img from "../images/timeline-3.jpg";
// import timeline4Img from "../images/timeline-4.jpg";
// import timeline5Img from "../images/timeline-5.jpg";
// import timeline6Img from "../images/timeline-6.png";
// import timeline7Img from "../images/timeline-7.png";

const Details = ({ src, date, title, text }) => {
  const ref = useRef(null);
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
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    setTimeline(getTimeline())
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center start"],
  });

  const scaleY = useSpring(scrollYProgress);
  return (
    <section className=" min-h-screen  lg:py-60 bg-gradient-to-tr from-cyan-200 to bg-white-200">
      <div className="  bg-white/20 md:w-2/3 w-full mx-auto  text-center md:rounded-lg shadow-xl xl:w-1/2">
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
            {timeline.map((event) => (
              <Details
              key={event.id}
              src={event.src}
              date={event.date}
              title={event.title}
              text={event.text}
            />
            ))}                        
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
