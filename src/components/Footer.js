import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaMeetup } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-yellow-300 to-orange-400">
      <h4 className="text-center xl:text-4xl text-2xl  pt-10 font-thin">
        Contact us
      </h4>

      <div className="flex flex-row items-center justify-center py-2">
        <AiOutlineMail fontSize="2rem" />
        <span className="text-md xl:text-xl  px-2">
          info@codeforhawaii.org
        </span>{" "}
      </div>

      <div className="flex items-center justify-center gap-10  px-20 py-2 text-xl text-center">
        <a
          href="https://github.com/CodeWithAloha"
          target="_blank"
          className="hover:scale-105"
        >
          <BsGithub fontSize={40} />
        </a>
        <a
          href="https://www.meetup.com/code-for-hawaii/"
          className="hover:scale-105"
          target="_blank"
        >
          <FaMeetup fontSize={46} />
        </a>
      </div>
      <div
        className="flex flex-col items-center gap-2 
      justify-center text-sm xl:text-xl pt-6  "
      >
       
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
      <p className="text-sm xl:text-xl font-semibold text-center py-4">
        Copyright © Code With Aloha 2023
      </p>
    </footer>
  );
};

export default Footer;
