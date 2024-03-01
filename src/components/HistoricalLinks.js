import React from "react";

export const HistoricalLinks = () => {
  return (
    <div className="flex flex-col items-start w-full relative mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">
        Historical Sites
      </h2>

      <a 
        className="text-blue-500 hover:underline mb-2" 
        href="https://www.facebook.com/CityCampHNL/"
      >
        CityCamp Honolulu Facebook Page
      </a>
      <a 
        className="text-blue-500 hover:underline mb-2" 
        href="https://web.archive.org/web/20210510151613/https://www.codeforamerica.org/blog/2012/08/23/introducing-the-brigade-captains-program/"
      >
        2012 Brigade Captains are Announced
      </a>
      <a 
        className="text-blue-500 hover:underline mb-2" 
        href="https://web.archive.org/web/20220915101458/https://www.codeforhawaii.org/"
      >
        Older Code For Hawaii Website
      </a>
    </div>
  )
}