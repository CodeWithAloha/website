import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getClients } from "@/data/webData";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(getClients());
  }, []);

  const handleClientImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20">
      <h2 className="text-4xl xl:text-7xl pt-10 drop-shadow-xl text-center py-20">
        Some of our clients
      </h2>

      <div className="flex items-center justify-center pb-40">
        {clients.map((client) => (
          <Image
            onClick={() => handleClientImageClick(client.url)}
            key={client.id}
            alt={client.alt}
            src={client.src}
            width={client.width}
            height={client.height}
            className={client.className}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
