"use client";
import React from "react";
import me from "./assets/images/output.webp";
import Image from "next/image";
import { useTheme } from "next-themes";
import Fade from "./components/Fade";
import FaqBackground from "./components/FaqBackground";

const Hero = () => {
  return (
    <section
      id="About"
      className="py-[85px] px-[20px] min-h-screen md:min-h-fit relative"
      style={{
        // backgroundColor: "#1f2937",
        color: "#e5e7eb",
      }}
    >
      <FaqBackground />
      <div className="flex justify-between max-w-7xl mx-auto items-center gap-20">
        <div>
          <Fade delay={0.005} inView>
            <h2
              className="text-[30px] md:text-[50px] "
              style={{
                color: "#e5e7eb",
              }}
            >
              Hello, I&apos;m <span className="font-bold ">Ezekiel</span>
            </h2>
          </Fade>
          <Fade delay={0.1} inView>
            <p className="text-[14px] md:text-[18px]  mt-8">
              I&apos;m a Software Engineer with a strong foundation in both web
              and mobile application development. Proficient in building
              responsive and intuitive user interfaces using frameworks like
              React and React Native, and experienced in backend development
              with Node.js, Express, and Django. Adept at creating scalable
              architectures, integrating APIs, and ensuring cross-platform
              compatibility. Passionate about writing clean, maintainable code
              and continuously learning new technologies. A collaborative
              problem-solver with a detail-oriented mindset and a drive to
              deliver impactful, high-quality solutions.
            </p>
          </Fade>
          <Fade delay={0.3} inView>
            <div className="mt-8 text-base relative w-fit cursor-pointer">
              <button className="border-solid border-[#6366f1]  border-1 px-[32px] py-[12px] cursor-pointer after:absolute after:h-full after:w-0 hover:after:w-full after:transition-all after:bg-[#6366f1] after:content-[''] after:left-0 after:top-0">
                <a
                  href="/Ezekiel's Cv.pdf"
                  className="z-[1] relative cursor-pointer h-full w-full"
                  style={{
                    color: "#e5e7eb",
                  }}
                >
                  View My Resume
                </a>
              </button>
            </div>
          </Fade>
        </div>

        <div className="relative hidden lg:block">
          <Image
            src={me}
            alt=""
            className="w-full h-full relative z-20 rounded-full"
          />
          <div className="w-[100%] -left-5 bg-white h-full absolute top-5 rounded-full"></div>
        </div>
        {/* <div className="relative">
          <Image
            src={me}
            alt=""
            className="w-full h-full relative z-20 "
          />
          <div className="w-[90%] -left-5 bg-white h-full absolute top-5 "></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import me from "./assets/images/output.webp";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div className="relative top-[85px] bg-gradient-to-b from-gray-100 to-gray-200 py-16">
//       <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto items-center gap-10 md:gap-20 px-6">
//         <div className="text-center md:text-left">
//           <h2 className="text-[40px] md:text-[50px] font-bold text-gray-800 leading-tight">
//             Hello, I&apos;m <span className="text-indigo-600">Ezekiel</span>
//           </h2>
//           <p className="text-[16px] md:text-[18px] mt-6 text-gray-600 leading-relaxed">
//             I&apos;m a Software Engineer with a strong foundation in both web
//             and mobile application development. Proficient in building
//             responsive and intuitive user interfaces using frameworks like React
//             and React Native, and experienced in backend development with
//             Node.js, Express, and Django. Adept at creating scalable
//             architectures, integrating APIs, and ensuring cross-platform
//             compatibility. Passionate about writing clean, maintainable code and
//             continuously learning new technologies. A collaborative
//             problem-solver with a detail-oriented mindset and a drive to deliver
//             impactful, high-quality solutions.
//           </p>
//           <div className="mt-8">
//             <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
//               View My Resume
//             </button>
//           </div>
//         </div>
//         <div className="relative w-64 h-64 md:w-80 md:h-80">
//           <Image
//             src={me}
//             alt="Ezekiel"
//             className="w-full h-full rounded-full relative z-20 object-cover shadow-lg"
//           />
//           <div className="w-[90%] h-[90%] bg-white absolute top-5 left-5 rounded-full shadow-md z-10"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
