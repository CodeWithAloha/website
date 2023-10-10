import React from "react";
import WhatToExpect from "./WhatToExpect";
import Team from "./Team";
import OurFocus from "./OurFocus";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-br from-cyan-200 to bg-white 
                    flex flex-col items-center px-10"
      >
        <Team />
        <OurFocus />
        <WhatToExpect />
      </section>
    </>
  );
};

export default About;
