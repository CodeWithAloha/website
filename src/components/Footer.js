import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import github from "../images/github.svg"
import meetup from "../images/meetup.svg";

const Footer = () => {
  return (
<div className="footer-section w-1000 bg-gradient-to-tr from-orange-400 to bg-yellow-200 m-8 pb-5">
  <footer id="footer">
    <div className="col col1">
      <center>
      <Logo className="footer-logo" />
      </center>
      <div className="social mt-5 ml-6">
      <Link href="https://github.com/CodeWithAloha" whilehover={{ scale: 1.5 }}>
      <Image
        alt="Code with Aloha logo"
        src={github}
        width={70}
        height={70}
        className="cursor-pointer hover:animate-pulse"
      />
    </Link>
    <Link href="https://www.meetup.com/code-for-hawaii/" whilehover={{ scale: 1.5 }}>
      <Image 
        alt="Code with Aloha logo"
        src={meetup}
        width={70}
        height={70}
        className="cursor-pointer hover:animate-pulse"
      />
    </Link>
      </div>
      <p className="copyright text-center mt-4" style={{ color: "#000", fontSize: "smaller" }}>
        2024 © All Rights Reserved
      </p>
    </div>
   
    <div className="backdrop" />
  </footer>
</div>
  );
};

export default Footer;
