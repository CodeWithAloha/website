import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaMeetup } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-yellow-300 to-orange-400">
      <h4 className="text-center text-4xl  pt-10 font-thin">Contact us</h4>

      <div className="flex flex-row items-center justify-center py-4">
        <AiOutlineMail fontSize="2rem" />

        <h2 className="pl-2 text-xl">
          Email:
          <span className="text-xl  px-2">
            info@codeforhawaii.org
          </span>{" "}
        </h2>
      </div>

      <div className="flex items-center justify-center gap-10  px-20 py-4 text-xl text-center">
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
      <div className="flex items-center gap-10  justify-center  py-6 text-xl text-center">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
      <p className="text-xl font-semibold text-center py-6">
        Copyright © Code With Aloha 2023
      </p>
    </footer>
  );
};

export default Footer;
