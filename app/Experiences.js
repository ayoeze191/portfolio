"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import Fade from "./components/Fade";
const experiences = [
  {
    period: "Oct 2024 – Present",
    work: "Full-Stack Engineer (Web & Mobile)",
    company: "Learnpally",
    url: "https://learnpally.com",
    experiences_gained: [
      "Built responsive React web interfaces and React Native mobile screens with consistent UX across platforms.",
      "Integrated Mixpanel & PostHog for event tracking, funnel analysis, and product insights.",
      "Developed RESTful APIs with Node.js/Express for course management and user workflows.",
      "Implemented JWT auth, OAuth 2.0 social login, and RBAC for secure role-based access.",
      "Integrated Firebase push notifications and real-time delivery system.",
      "Automated email campaigns using node-cron (welcome, re-engagement, updates).",
    ],
    stacks: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "Firebase",
      "Mixpanel",
      "PostHog",
    ],
  },

  {
    period: "Dec 2023 – Oct 2024",
    work: "Full-Stack Developer",
    company: "RentAnything",
    url: "https://rentanything.io",
    experiences_gained: [
      "Architected a custom Vue 3 SSR pipeline using Vite, improving SEO and initial load performance.",
      "Built complete rental workflows: listings, booking system, pricing, and reviews.",
      "Developed Owner dashboard and renter experience end-to-end.",
      "Integrated Google Maps Places API for location search and distance filtering.",
    ],
    stacks: ["Vue 3", "Vite SSR", "Node.js", "Google Maps API"],
  },

  {
    period: "Nov 2021 – Dec 2023",
    work: "Full-Stack Engineer",
    company: "EkoPages",
    url: "https://ekopages.com",
    experiences_gained: [
      "Developed React frontend and Django REST backend for e-learning and e-commerce platform.",
      "Designed scalable REST APIs and integrated secure payments (Stripe & Paystack).",
      "Managed PostgreSQL & MongoDB schemas for performance and reliability.",
      "Built course management systems and content delivery pipelines.",
    ],
    stacks: [
      "React",
      "Django REST",
      "PostgreSQL",
      "MongoDB",
      "Stripe",
      "Paystack",
    ],
  },

  {
    period: "Prior Role",
    work: "Full-Stack Engineer",
    company: "Lagbaja Mobile",
    url: "#",
    experiences_gained: [
      "Built a multi-sided marketplace using Next.js and Django REST Framework.",
      "Designed APIs for service providers and customers with scalable architecture.",
      "Delivered responsive, mobile-first UI with seamless backend integration.",
    ],
    stacks: ["Next.js", "Django REST", "PostgreSQL"],
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
        <p className="text-white font-semibold mb-3 md:mb-4">
          {work} <span className="text-indigo-500">@ {company}</span>
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
