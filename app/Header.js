"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "motion/react";
import SideBar from "./SideBar";
import { IoCloseSharp } from "react-icons/io5";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
// Header former color
const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // trigger when section center is in view
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    console.log(theme, "theme");
  }, [theme]);
  return (
    <div
      className={`  fixed top-0 flex left-0 w-full z-50 transition-all duration-300 shadow ${
        isScrolled ? "h-16" : "h-18"
      }
       ${"bg-[#111827]"} 
      
      `}
    >
      {showSideBar && <SideBar />}
      <div className="flex justify-between w-full px-[10px]  md:px-[20px] max-w-7xl mx-auto items-center ">
        <div
          className="text-[14px] md:text-[20px]"
          style={{
            color: "",
          }}
        >
          &lt;Eazy/&gt;
        </div>

        <div className="md:flex w-fit hidden gap-12 items-center text-[1rem]">
          <nav className="list-none flex gap-8 items-center">
            <Navitem
              text="Home"
              mode={theme}
              active={activeSection === "Home"}
            />
            <Navitem
              text="About"
              mode={theme}
              active={activeSection === "About"}
            />
            <Navitem
              text="Experience"
              mode={theme}
              active={activeSection === "Experience"}
            />
            <Navitem
              text="Projects"
              mode={theme}
              active={activeSection === "Projects"}
            />
          </nav>
          {/* <button className="bg-[#05df72] rounded-3xl p-5 text-[1rem] font-semibold">
                            Download Resume
                    </button> */}
        </div>
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className={`md:hidden cursor-pointer text-2xl px-2 flex items-center rounded-sm h-[30px] nav-sm:h-[35px]  bg-white/10 ${
            theme == "dark" ? "bg-white/10" : "bg-gray-200"
          }`}
        >
          {!showSideBar ? (
            <GiHamburgerMenu
              className="md:hidden"
              fontSize={20}
              color={theme == "dark" ? "white" : "black"}
            />
          ) : (
            <IoCloseSharp
              className="md:hidden"
              fontSize={20}
              color={theme == "dark" ? "white" : "black"}
            />
          )}
        </button>
        {/* <button
          className="text-[20px] cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <WiDaySunny fontSize={20} />
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <FaMoon fontSize={20} color="black" />
            </motion.span>
          )}
        </button> */}
      </div>
    </div>
  );
};

export default Header;

const Navitem = ({ text, mode, active }) => {
  const handleClick = () => {
    const section = document.getElementById(text);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      onClick={handleClick}
      className="hover:text-[#3730A3] cursor-pointer hover:underline"
      style={{
        color: active ? "#3730A3" : "white",
        textUnderlineOffset: "10px",
        fontWeight: active ? "bold" : "normal",
        transform: active ? "scale(1.1)" : "scale(1)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      {text}
    </li>
  );
};
