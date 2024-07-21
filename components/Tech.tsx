import React from "react";
import { techs } from "@/data";

const Tech = () => {
  return (
    <div className="py-20" id="tech">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-20">
        {techs.map(({ id, img }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} className="md:w-10 w-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
