import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../images/logo.png";

const Logo = () => {
  return (
    <Link href="/" whilehover={{ scale: 1.5 }}>
      <Image
        alt="Code with Aloha logo"
        src={logoImg}
        width={96}
        height={96}
        className="cursor-pointer hover:animate-pulse"
      />
    </Link>
  );
};

export default Logo;
