"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 bg-white rounded-lg shadow-xl overflow-hidden">
        {/* IMAGE CONTAINER */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto mb-8 lg:mb-0">
          <Image
            src="/hero.png"
            alt="Hero Image"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center text-center lg:text-left">
          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESCRIPTION */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300">
              View My Work
            </button>
            <button className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
