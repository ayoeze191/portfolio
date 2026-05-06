"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import Fade from "./components/Fade";
const experiences = [
  {
    period: "Sept 2024 - Present",
    work: "Frontend Developer (remote)",
    company: "Ekopages",
    experiences_gained: [
      "Transformed Figma designs into pixel-perfect, responsive interfaces for SellCrea8, reducing revision cycles and improving collaboration.",
      "Developed custom skeleton loading states, enhancing perceived performance and user experience during data fetching.",
      "Integrated RESTful APIs for seamless data flow, using Postman for testing and validation.",
    ],
    stacks: ["ReactJs", " Tailwind", "Redux", "Axios"],
    url: "https://ekopages.com",
  },

  {
    period: "Sept 2024 - Present",
    work: "Frontend Developer (remote)",
    company: "RentAnything",
    experiences_gained: [
      "Transformed Figma designs into pixel-perfect, responsive interfaces for SellCrea8, reducing revision cycles and improving collaboration.",
      "Developed custom skeleton loading states, enhancing perceived performance and user experience during data fetching.",
      "Integrated RESTful APIs for seamless data flow, using Postman for testing and validation.",
    ],
    stacks: ["VueJs", "Bulma css", "Pinia", "Axios"],
    url: "https://RentAnything.io",
  },

  {
    period: "Sept 2024 - Present",
    work: "FullStack Web and Mobile Engineer (remote)",
    company: "Learnpally",
    experiences_gained: [
      "Transformed Figma designs into pixel-perfect, responsive interfaces for SellCrea8, reducing revision cycles and improving collaboration.",
      "Developed custom skeleton loading states, enhancing perceived performance and user experience during data fetching.",
      "Integrated RESTful APIs for seamless data flow, using Postman for testing and validation.",
    ],
    stacks: ["React", " Tailwind", "Redux", "Axios"],
    url: "learnpally.com",
  },
];
const Experiences = () => {
  const theme = useTheme();
  return (
    <section
      id="Experience"
      className="py-[40px] md:py-[85px] px-[20px] min-h-screen"
      style={{
        backgroundColor: "",
        color: "#e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-[20px] md:gap-[40px] items-center">
        <Fade delay={0.005} inView>
          <h2
            className={`${"text-white"} text-[20px] md:text-[30px] font-bold mx-auto`}
          >
            Professional <span className="text-indigo-600"> Experience</span>
          </h2>
        </Fade>
        <div className="flex flex-col md:gap-[40px] gap-[25px]">
          {experiences.map((exp, index) => (
            <Fade key={index} delay={index * 0.01} inView>
              {" "}
              <Experience {...exp} key={index} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

const Experience = ({
  period,
  work,
  experiences_gained,
  company,
  url,
  stacks,
}) => {
  const theme = useTheme();

  return (
    <div className="flex  flex-col md:flex-row text-[14px] md:text-[16px] text-[#6B7280] gap-6 md:gap-8">
      <p className="md:sticky md:top-18 md:w-[250px] self-start font-medium">
        {period}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 ${"bg-[#1F2937]"}  p-6 md:p-8 rounded-lg text-[13px] md:text-[15px] shadow-lg  transform transition-transform duration-300 hover:scale-105`}
      >
        <p className={`${"text-white"}  font-semibold mb-3 md:mb-4`}>
          {work}
          <span className="text-indigo-500">{" " + company}</span>
        </p>
        <ul className="list-disc list-inside space-y-4">
          {experiences_gained.map((gains, key) => (
            <li key={key}>{gains}</li>
          ))}
        </ul>
        <div className="w-fit flex flex-wrap items-center gap-3 md:gap-5 mt-5">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className={`${
                theme.theme == "dark" ? "text-indigo-500" : "text-yellow-500"
              } rounded-[20px] border-solid border-1 bg-[#3730A3] px-3 md:px-5 py-1`}
            >
              {stack}
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};
