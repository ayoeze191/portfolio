"use client";

import React, { useState } from "react";

import Fade from "./components/Fade";
// import FaqBackground from "./components/FaqBackground";
// import { useTheme } from "next-themes";
import { FaAngleDown } from "react-icons/fa6";
const Faq = () => {
  return (
    <section
      id="Faq"
      className="relative py-[40px] md:py-[85px] px-[20px] min-h-screen overflow-hidden"
    >
      {/* Background Animation */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-[20px] md:gap-[40px] items-center">
        <Fade delay={0.005} inView>
          <h2
            className={`${"text-white"} text-[20px] md:text-[30px] font-bold mx-auto`}
          >
            Frequently <span className="text-indigo-600">Asked Questions</span>
          </h2>
        </Fade>

        <div>
          <Questions />
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "How many years of experience do you have in web development?",
    answer:
      "I have over 3 years of experience in web development, specializing in both frontend and backend technologies. I have worked on a variety of projects, ranging from small business websites to large-scale applications, utilizing frameworks such as React, Node.js, and Django. My experience includes designing responsive user interfaces, developing RESTful APIs, and implementing database solutions to ensure efficient data management.",
  },
  {
    question: "What programming languages are you proficient in?",
    answer:
      "I am proficient in several programming languages including JavaScript, Python, and Java. I have extensive experience with JavaScript frameworks such as React and Node.js for frontend and backend development. Additionally, I have worked with Python for data analysis and backend services using Django. My knowledge of Java allows me to develop robust applications and understand object-oriented programming principles.",
  },
  {
    question: "Can you describe your experience with frontend frameworks?",
    answer:
      "I have extensive experience with frontend frameworks, particularly React. I have built numerous responsive and interactive user interfaces using React, leveraging its component-based architecture to create reusable UI elements. I am also familiar with state management libraries like Redux and Context API to manage application state effectively. Additionally, I have experience with other frontend technologies such as HTML, CSS, and Tailwind CSS to ensure visually appealing and user-friendly designs.",
  },
];

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#1F2937] mt-4 rounded-lg border border-gray-600/30 overflow-hidden hover:border-gray-500/50 transition-all duration-300">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#374151] transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>

        {/* Rotate icon when open */}
        <FaAngleDown
          size={20}
          color="white"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <div className="h-px bg-gradient-to-r from-gray-600/50 to-transparent mb-4"></div>
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  return faqData.map((item, index) => (
    <div className="flex flex-col gap-3" key={index}>
      <Question question={item.question} answer={item.answer} />
    </div>
  ));
};
export default Faq;
