"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-8 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-3xl">Biography</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Results-driven Senior Frontend Developer with expertise in
              building dynamic and responsive web applications. Proficient in
              frontend technologies such as HTML5, CSS/SCSS, Angular, React, Ngrx, Redux, Bootstrap, Tailwind CSS, Primeng, and Material UI. Successful track
              record in full-time roles across three companies and consultant
              positions in four organizations.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-gray-700">
              "User interface is the process of shifting from chaotic complexity to elegant simplicity."
            </span>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className="self-center mt-6"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl"
            >
              Skills
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {[
                "JavaScript",
                "TypeScript",
                "Angular",
                "React.js",
                "Next.js",
                "NGRX",
                "RXJS",
                "REDUX",
                "CONTEXT-API",
                "SCSS",
                "Tailwind CSS",
                "Spring Boot",
                "GraphQL",
                "Webpack",
                "Vite",
                "Docker",
                "AWS",
                "Firebase",
                "Git",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className="self-center mt-6"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-8 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl"
            >
              Experience
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {[
                {
                  title: "Senior Frontend Engineer",
                  description:
                    "I led web development, offering expertise in JavaScript and Typescript frameworks.",
                  date: "2022 - Present",
                  company: "Ge Vernova",
                  link: "https://www.gevernova.com/",
                },
                {
                  title: "Frontend Angular Developer",
                  description:
                    "I spearheaded Angular-based application development, leveraging advanced skills.",
                  date: "2019 - 2022",
                  company: "Turkpages",
                  link: "https://turkish.turkpages.com/",
                },
                {
                  title: "Full Stack Engineer",
                  description:
                    "Developed full-stack solutions using Angular, Node.js, and MongoDB.",
                  date: "2017 - 2019",
                  company: "Harmonic Soft",
                  link: "https://harmonicsoft.com/",
                },
              ].map((exp, index) => (
                <a
                  key={index}
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-md shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="font-bold text-lg">{exp.title}</div>
                  <div className="italic text-gray-600">{exp.date}</div>
                  <div className="mt-2">{exp.description}</div>
                  <div className="mt-2 text-blue-600 underline">
                    {exp.company}
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        {/* CANVAS CONTAINER */}
        <div className="lg:w-1/3 xl:w-1/2 relative lg:fixed lg:right-0 lg:h-full lg:border-l border-gray-300">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
