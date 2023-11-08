import React from "react";
import AboutComponents from "../components/AboutComponents";

const About = () => {
  return (
    <div className="min-h-screen justify-center items-center lg:px-32 px-5">
      <div className="space-y-4 lg:pt-14 text-green-700  lg:justify-center">
        <AboutComponents/>
      </div>
    </div>
  );
};

export default About;
