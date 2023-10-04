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
      className={`${className} pl-10 whitespace-nowrap text-[1.4rem]
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
    toggle() //automatically close the mobile nav div when clicking on a link
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} pl-10   lg:text-2xl text-black whitespace-nowrap py-5 
       uppercase font-bold hover:text-orange-400 transition-all ease-in-out
       border-b-[1px] border-black`}
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
    <header className="w-full pt-5 px-10 flex justify-between items-center">
      <Logo />
      <div className="lg:flex justify-between items-center hidden">
        <nav>
          <CustomLink href="#about" title="About us" />
          <CustomLink href="#projects" title="Projects" />
          <CustomLink
            href="https://www.meetup.com/Code-for-Hawaii/events/"
            target="_blank"
            className="font-satisfy text-5xl lowercase"
            title="Join us!"
          />
        </nav>
      </div>

      {/* ____________________mobile menu______________________________ */}
      <button
        className="flex flex-col justify-center items-center lg:hidden z-50"
        onClick={handleClick}
      >
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out 
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm m-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out 
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
        ></span>
      </button>

      {isOpen ? (
        <div
          className="lg:w-1/2 max-w-[300px] w-[80%] flex pt-20 pr-10 flex-col justify-end items-end fixed
      top-0 right-0  bg-white/20  backdrop-blur-md pb-36 z-30 shadow-xl rounded-l-lg"
        >
          <nav className="flex flex-col justify-center items-center pt-8">
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
              className=" font-normal font-satisfy  text-2xl lg:text-5xl lowercase"
              title="Join us!"
              toggle={handleClick}
            />

          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
