import React from 'react'
import { FaMeetup } from "react-icons/fa";
import NavBar from './NavBar';

const HomePage = () => {
  return (
    <section className="min-h-screen  bg-gradient-to-tr from-cyan-200 to bg-white">
      <NavBar />
      <div className="h-screen flex items-center xl:pl-[12%] justify-center flex-col xl:flex-row">
        <div className=" flex-1 scale-75 xl:scale-100 pb-28">
          <img src="master.png" className="w-full " />
        </div>

        <div className="flex flex-col text-right justify-center xl:items-start items-center 
        flex-1  2xl:scale-125 xl:pl-40 ">
          <h4
            className="font-satisfy text-5xl bg-clip-text text-transparent
        bg-gradient-to-r from-red-500 to-yellow-400"
          >
            Welina Mai !
          </h4>
          <h2 className="font-montserat lg:text-4xl text-2xl font-semibold py-6 whitespace-nowrap">
            Hawaiʻi Civic Tech
          </h2>
          <h3 className="text-xl pb-5 font-semibold max-w-lg xl:text-left text-center pr-10 xl:pr-0">
            We are a civic-minded volunteers team, interested in using
            technology and open data to make our local communities better.
          </h3>

          <h4 className="text-xl">Please feel free to join us! </h4>
          <p className='text-xl'>No coding experience required</p>

          <div
            className="flex justify-center items-center  max-w-md rounded-full px-7 my-6 shadow-lg 
          bg-gradient-to-tr from-orange-400 to bg-yellow-200 hover:scale-105"
          >
            <a
              href="https://www.meetup.com/code-for-hawaii/"
              target="_blank"
              className="font-semibold text-xl"
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
