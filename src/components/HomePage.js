import React from 'react'
import { FaMeetup } from "react-icons/fa";

const HomePage = () => {
  return (
    <section id="#top" >
      <div className="h-screen flex items-center xl:pl-[12%] justify-center flex-col xl:flex-row">
        <div className=" flex-1 ">
          <img src="master.png" className="h-full  mt-10 " />
        </div>

        <div className="flex flex-col text-right justify-center lg:items-start items-center flex-1  2xl:scale-125 xl:pl-40 ">
          <h4 className="font-satisfy text-3xl ">Welina Mai !</h4>
          <h2 className="font-montserat lg:text-4xl text-2xl font-semibold py-6 whitespace-nowrap">
            Hawaiʻi Civic Tech
          </h2>
          <h3 className="text-lg pb-5 font-semibold max-w-lg lg:text-left text-center pr-10 xl:pr-0">
            We are a civic-minded volunteers team, interested in using
            technology and open data to make our local communities better.
          </h3>

          <h4>Please feel free to join us! </h4>
          <p>No coding experience required</p>

          <div
            className="flex justify-center items-center  max-w-md rounded-full px-7 my-6 shadow-lg 
          bg-gradient-to-tr from-orange-400 to bg-yellow-200 hover:scale-105"
          >
            <a
              href="https://www.meetup.com/code-for-hawaii/"
              target="_blank"
              className="font-semibold"
            >
              Join a meeting
            </a>
            <FaMeetup className="text-4xl m-2 " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage
