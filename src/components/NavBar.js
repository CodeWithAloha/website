import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} pl-10 whitespace-nowrap text-2xl
       uppercase font-bold hover:text-orange-400 transition-colors ease-in-out
       
       `}
    >
      {title}
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle()
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} pl-10 text-2xl text-white whitespace-nowrap py-5 
       uppercase font-bold hover:text-orange-400 transition-all ease-in-out
       border-b-2 border-white
       ${router.asPath === href ? "text-orange-500" : "text-black"}
       `}
    >
      {title}
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed t-0 w-full pt-5 px-10 flex justify-between items-center ">
      <Logo />
      <div className=" lg:flex justify-between items-center hidden ">
        <nav className="">
          <CustomLink href="#about" title="About us" />
          <CustomLink href="#projects" title="Projects" />

          <CustomLink
            href="https://www.meetup.com/Code-for-Hawaii/events/"
            target="_blank"
            className="px-2 font-normal font-satisfy text-4xl lowercase"
            title="Join us!"
          />
        </nav>
      </div>

      {/* ____________________mobile menu______________________________ */}
      <button
        className="flex flex-col justify-center items-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-orange-400 block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-orange-500 block h-0.5 w-6 rounded-sm m-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-orange-400 block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out 
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
        ></span>
      </button>

      {isOpen ? (
        <div
          className=" w-1/3 h-full flex pt-20 pr-10 flex-col justify-between items-end fixed
      top-0 right-0  bg-black  backdrop-blur-md py-30 z-20"
        >
          <nav className="  flex flex-col justify-center items-center py-20">
            <MobileCustomLink
              href="#about"
              title="About us"
              toggle={handleClick}
            />
            <MobileCustomLink
              href="#projects"
              title="Projects"
              toggle={handleClick}
            />

            <MobileCustomLink
              href="https://www.meetup.com/Code-for-Hawaii/events/"
              target="_blank"
              className="px-2 font-normal font-satisfy text-5xl lowercase"
              title="Join us!"
              toggle={handleClick}
            />

            {/* <img
              src="./assets/chicken.png"
              className="w-1/3 absolute bottom-2"
            ></img> */}
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
