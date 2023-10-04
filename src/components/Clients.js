import React from 'react'
import Image from 'next/image'


const Clients = () => {
  return (
    <div className="pt-20">
      {/* <img src="./assets/projectsAssets/deliveredProjects.png" className="h-40 mt-20 mx-auto" /> */}
      <h2 className="text-4xl xl:text-7xl pt-10 drop-shadow-xl text-center py-20">
        Some of our clients
      </h2>

      <div className="flex items-center justify-center pb-40">
        <Image
          alt='Hawaii Zoning Atlus'
          src="/./assets/projectsAssets/client1.png"
          width={500}
          height={500}
          className="h-full  w-1/3 lg:w-1/4 "
        />
        <Image
          alt='The Civil Beat - Law Center For Public Interest'
          src="/./assets/projectsAssets/client2.png"
          width={500}
          height={500}
          className="h-full w-1/3 lg:w-1/4 "
        />
      </div>
    </div> 
  );
}

export default Clients
