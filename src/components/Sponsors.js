import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getSponsors } from "@/data/webData";

const Sponsers = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    setSponsors(getSponsors());
  }, []);

  const handleSponsorImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20">
      <h2 className="text-4xl xl:text-7xl pt-10 drop-shadow-xl text-center py-20">
        Sponsors
      </h2>

      <div className="flex items-center justify-center pb-40">
        {sponsors.map((sponsor) => (
          <Image
            onClick={() => handleSponsorImageClick(sponsor.url)}
            key={sponsor.id}
            alt={sponsor.alt}
            src={sponsor.src}
            width={sponsor.width}
            height={sponsor.height}
            className={sponsor.className}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
