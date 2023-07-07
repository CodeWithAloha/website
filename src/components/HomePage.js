import React from 'react'
import { FaMeetup } from "react-icons/fa";
import NavBar from './NavBar';

const HomePage = () => {
  return (
    <section className="h-screen overflow-x-hidden bg-gradient-to-tr from-cyan-200 to bg-white">
      <NavBar />
      <div className="max-h-full flex items-center justify-center flex-col lg:flex-row">
        <div className="scale-[80%]  2xl:scale-90 xl:pl-20 flex flex-col items-center">
          <img src="hero-image.png" className="w-full max-w-[900px] animate-float" />
          {/* shadow under hero image */}
          {/* <div className='w-[20%] h-3 mt-2 rounded-full blur-2xl bg-gradient-to-t bg-black'></div> */}
        </div>

        <div
          className="flex flex-col text-right justify-center items-center lg:items-start scale-[90%]
         2xl:scale-100  px-4  xl:pl-20 "
        >
          <h4
            className="font-satisfy text-4xl lg:text-5xl bg-clip-text text-transparent
        bg-gradient-to-r from-red-500 to-yellow-400 pb-6"
          >
            Welina Mai !
          </h4>
          {/* <h2 className="font-montserat lg:text-4xl text-xl font-semibold py-6 whitespace-nowrap">
            Hawaiʻi Civic Tech
          </h2> */}
          <h3 className="text-[0.8rem] sm:text-sm md:text-md lg:text-lg xl:text-xl pb-5 font-semibold  lg:text-left text-center ">
            We are a civic-minded volunteers team, interested in using
            technology <br />
            and open data to make our local communities better.
          </h3>

          <h4 className="text-[0.8rem] md:text-md xl:text-xl">
            Please feel free to join us!{" "}
          </h4>
          <p className="text-[0.8rem] md:text-md xl:text-xl">
            No coding experience required
          </p>

          <div
            className="flex justify-center items-center  max-w-md rounded-full px-7 my-6 shadow-lg 
          bg-gradient-to-tr from-orange-400 to bg-yellow-200 hover:scale-105"
          >
            <a
              href="https://www.meetup.com/code-for-hawaii/"
              target="_blank"
              className="font-semibold text-md xl:text-xl"
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
