
import React from "react";
import Image from "next/image";
import client1Img from "../images/client1.png";
import client2Img from "../images/client2.png";


const Clients = () => {
  return (
    <div className="pt-20">
      <h2 className="text-4xl xl:text-7xl pt-10 drop-shadow-xl text-center py-20">
        Some of our clients
      </h2>

      <div className="flex items-center justify-center pb-40">
        <Image
          alt="Hawaii Zoning Atlus"
          src={client1Img}
          width={500}
          height={500}
          className="h-full  w-1/3 lg:w-1/4 "
        />

        <Image
          alt="The Civil Beat - Law Center For Public Interest"
          src={client2Img}
          width={500}
          height={500}
          className="h-full w-1/3 lg:w-1/4 "
        />
      </div>
    </div>
  );
};

export default Clients;
