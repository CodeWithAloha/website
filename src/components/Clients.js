import React from 'react'

const Clients = () => {
  return (
    <div className='pt-20'>
      {/* <img src="./assets/projectsAssets/deliveredProjects.png" className="h-40 mt-20 mx-auto" /> */}
      <h2 className="text-5xl xl:text-7xl pt-10 drop-shadow-xl text-center py-20">
        Some of our clients
      </h2>

      <div className="flex items-center justify-center pb-40">
        <img
          src="./assets/projectsAssets/client1.png"
          className="h-full w-1/4 "
        />
        <img
          src="./assets/projectsAssets/client2.png"
          className="h-full w-1/4"
        />
      </div>
    </div>
  );
}

export default Clients
