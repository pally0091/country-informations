"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className=" bg-gray-200 text-black flex flex-row items-center p-2 lg:w-8/12 sm:w-[95%] mx-auto h-96 mt-48 mb-40 rounded-lg border-2 border-black ">
      <div className="w-full text-center p-6">
        <h1 className="text-4xl font-bold">Debashis Roy</h1>
        <p className="font-bold text-sky-500">
          <Typewriter
            words={[
              "Web Design",
              "Responsive website",
              "HTML and CSS",
              "JavaScript",
              "React with router dom",
              "Graphics Editing",
              "NextJS",
              "TypeScript",
              "REST APIs",
              "Custom Components",
            ]}
            loop={25}
            cursor
            cursorStyle="<<-"
            typeSpeed={70}
            delaySpeed={1500}
            deleteSpeed={90}
          ></Typewriter>
        </p>
        <p className="text-lg mt-3">
          👀 I’m interested in Web design and devolopment.
          <br />
          🌱 I’m capable to work with ReactJS, NextJS
          <br />
          💞️ I’m looking to collaborate on anythings related.
        </p>{" "}
        <br></br>
        <p>Email : debashisroy9191@gmail.com, debashisroy0091@yahoo.com</p>
      </div>
    </div>
  );
};

export default About;
