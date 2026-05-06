"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import lpIconArrow from "@/assets/svg/learnpally_arrows.svg";
// import ImageSkillBuilding from "@/assets/img/use-case/skill-building.png";
// import ImageForTeams from "@/assets/img/use-case/teams-and-large.png";
import ekopages from "./../app/assets/images/Projects/ekopages.png";
import Mctechy from "./../app/assets/images/Projects/Mctechy.png";
import misfit from "./../app/assets/images/Projects/Misfit.png";
import nerdy from "./../app/assets/images/Projects/Nerdy.png";
import matacare from "./../app/assets/images/Projects/matacare.png";
import dogify from "./../app/assets/images/Projects/Dogify.png";
import shibayc from "./../app/assets/images/Projects/shibayc.png";
import { EffectCards } from "swiper/modules";
import { GiArrowCluster } from "react-icons/gi";

const useCase = [
  {
    title: "Ekopages (An SDG Website )",
    description:
      "Gain recognized credentials and specialized knowledge through comprehensive programs offered by leading African universities, designed to advance your career and expertise.",
    image: ekopages,
    url: "https://ekopages.com",
    github: "https://github.com/ayoeze191/Ekopages",
    stacks: ["tailwind", "reactjs", "Aos", "swipper", "Django Rest Framework"],
  },
  {
    title:
      "Dogify (A Dog website with various features like lazy loading and co)",
    description:
      "Develop essential skills and knowledge for aspiring entrepreneurs, equipping them with the tools and insights needed to start and grow successful businesses.",
    image: dogify,
    url: "https://dogifii.netlify.app/",
    github: "https://github.com/ayoeze191/dogify",
    stacks: ["nextjs", "tailwind", "Zustand", "typescript"],
  },
  {
    title: "Mktechy (A landing page for an Edtech)",
    description:
      "Develop essential skills and knowledge for aspiring entrepreneurs, equipping them with the tools and insights needed to start and grow successful businesses.",
    image: Mctechy,
    url: "https://mktechy.netlify.app/ ",
    github: "https://github.com/ayoeze191/mctechy",
    stacks: ["React", "tailwind", "typescript"],
  },
  // {
  //   title: "Misfit (An Ecommerce Platform)",
  //   description:
  //     "Tailor your learning experience to meet the needs of your team or organization, with access to a wide range of courses and resources designed for corporate and professional development.",
  //   image: misfit,
  //   url: "https://ekopages.com",
  //   github: "https://git@github.com:ayoeze191/Ekopages.git",
  //   stacks: ["tailwind", "reactjs", "Django Rest Framework"],
  // },
  {
    title: "Matacare Landing Page(A landing page for an hospital)",
    description:
      "Enhance your skills and knowledge to stay competitive in the job market or start a successful business, with access to a wide range of courses and resources designed for personal and professional development.",
    image: matacare,
    url: "https://matacare.netlify.app",
    github: "https://git@github.com:ayoeze191/Ekopages.git",
    stacks: ["tailwind", "reactjs", "typescript"],
  },
  {
    title: "Nerdyeye",
    description: "https://nerdyeye1.netlify.app/",
    image: nerdy,
    url: "https://nerdyeye1.netlify.app/",
    github: "",
    stacks: ["tailwind", "reactjs"],
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute",
    top: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: "relative",
    top: 0,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute",
    top: 0,
  }),
};

function Projects() {
  const { theme, setTheme } = useTheme();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [direction, setDirection] = useState(0);
  const titleRefs = useRef([]);

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setActiveIndex((prevIndex) => (prevIndex + 1) % useCase.length);
      }, 5000); // Switch every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const activeTitle = titleRefs.current[activeIndex];
    if (activeTitle) {
      const parentTop =
        activeTitle.offsetParent?.getBoundingClientRect().top ?? 0;
      const titleTop = activeTitle.getBoundingClientRect().top - parentTop;
      setIndicatorTop(titleTop + activeTitle.offsetHeight / 2 - 10);
    }
  }, [activeIndex]);

  const handleUseCaseClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setIsAutoPlaying(false);
    setActiveIndex(index);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const setTitleRef = (index) => (el) => {
    titleRefs.current[index] = el;
  };
  return (
    <section
      id="Projects"
      className="py-[40px] md:py-[85px] px-[20px] min-h-screen "
      style={{
        backgroundColor: "",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-[20px] md:gap-[40px] items-center">
        <h2
          className={`${"text-white"} text-[20px] md:text-[30px] font-bold mx-auto`}
        >
          Live <span className="text-indigo-600">Projects</span>
        </h2>

        <div className="mt-8 lg:hidden  w-full flex flex-col gap-4">
          {/* <Project img={useCase[0].image.src} /> */}
          {useCase.map((use, index) => (
            <Project
              img={use.image.src}
              key={index}
              stacks={use.stacks}
              link={use.url}
              github={use.github}
              title={use.title}
              description={use.description}
            />
          ))}
        </div>
        <div className="mt-8 hidden items-center justify-between lg:flex">
          <div className="max-w-[350px] w-full">
            <div className="relative">
              <motion.div
                layoutId="activeIndicator"
                className="absolute -left-7"
                animate={{
                  top: indicatorTop,
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                <FaExpandArrowsAlt size={20} color="#6366f1" />
              </motion.div>
              {useCase.map((item, index) => (
                <motion.div
                  key={index}
                  ref={setTitleRef(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex cursor-pointer items-center gap-x-4 px-2 py-4 ${
                    index === 0 ? "" : "mt-4"
                  } `}
                  onClick={() => handleUseCaseClick(index)}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      color: index === activeIndex ? "#6366f1" : "#D0D1DA",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className={`text-[18px] text-[#6B7280] font-medium`}>
                      {item.title}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="relative after:bg-[black] after:opacity-[0.5] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full rounded-2xl shadow-lg"
              >
                <Image
                  src={useCase[activeIndex].image}
                  alt="Use Case Side Image"
                  className="rounded-2xl"
                />
                <motion.div
                  className="absolute bottom-0 px-10 py-6 gap-4 bg-gradient-to-t from-black to-transparent rounded-b-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-4">
                    <a
                      className="bg-[#6366f1] hover:bg-[#4F51D1] cursor-pointer z-10 shadow px-4 py-2 text-[16px] rounded-[8px] text-white font-medium"
                      href={useCase[activeIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      className="bg-[#6366f1] hover:bg-[#4F51D1] cursor-pointer z-10 shadow px-4 py-2 text-[16px] rounded-[8px] text-white font-medium"
                      href={useCase[activeIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-[#D0D1DA] z-10">
                    {useCase[activeIndex].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
const getRandomColor = () => {
  const colors = [
    "#0CA5E9",
    "#F59E0B",
    "#10B981",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
export default Projects;

const Project = ({ img, stacks, link, github, title, description }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="  mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-in-out m-4 flex flex-col transform hover:-translate-y-1"
      style={{
        backgroundColor: theme === "dark" ? "#1F2937" : "white",
      }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={img}
          alt={img}
          className="object-cover transition-transform duration-700 ease-in-out scale-100"
        />
      </div>
      <div className="px-6 py-4 overflow-auto backdrop-blur-sm">
        <h2 className={`font-bold text-xl mb-2 transition-colors duration-300`}>
          {title || "Project Title"}
        </h2>
        <p className="text-gray-500 text-base transition-colors duration-300 text-[13px] md:text-[15px]">
          {description ||
            "This is a brief description of the project. It highlights the main features and functionalities of the project, showcasing its purpose and value."}
        </p>
        <div className="flex mt-2 flex-wrap text-[13px] md:text-[15px]">
          {stacks.map((stack, index) => (
            <span
              key={index}
              className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold mr-2 mb-2 px-2 py-1 rounded-full transition-all w-fit duration-300 ease-in-out transform hover:scale-105"
            >
              <span
                className="w-2 h-2 rounded-full mr-2 transition-transform duration-300"
                style={{ backgroundColor: getRandomColor() }}
              ></span>
              {stack}
            </span>
          ))}
        </div>
        <div className=" pt-8  flex justify-between items-center  backdrop-blur-sm">
          <a
            href={link}
            className="flex items-center text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mouse-pointer-click w-5 h-5 mr-2 transition-transform duration-300"
            >
              <path d="m9 9 5 12 1.8-5.2L21 14Z"></path>
              <path d="M7.2 2.2 8 5.1"></path>
              <path d="m5.1 8-2.9-.8"></path>
              <path d="M14 4.1 12 6"></path>
              <path d="m6 12-1.9 2"></path>
            </svg>
            <span>Live Demo</span>
          </a>
          <a
            href={github}
            className="flex items-center text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github w-5 h-5 mr-2 transition-transform duration-300 hover:rotate-6 text-inherit"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3" />
              <path d="M20 21v-2.87a3.37 3.37 0 0 0-.94-2.61" />
              <path d="M14 21c-3.14.35-6.44-1.54-6.44-7a5.44 5.44 0 0 1 1.5-3.77" />
              <path d="M12 3.5a5.07 5.07 0 0 1 1.91.39c.68.27 1.49.81 2.09 1.57" />
              <path d="M12 3.5c-.9 0-1.8.15-2.65.48A5.5 5.5 0 0 0 6 7.5c0 5.46 3.3 6.65 6.44 7" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
