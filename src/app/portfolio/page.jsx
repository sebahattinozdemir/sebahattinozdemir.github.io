"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Ayyildiz Makine",
    desc: "Written for ayyildiz makine that supports five different languages, written with JS, HTML, and CSS",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://ayyildizmakine.netlify.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Rambly.com",
    desc: "Worked for Modaramo Media, which is located in New York, we developed an React and Nextjs app for influencers",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://beta.rambly.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Angular E-Commerce App",
    desc: "Worked for 3 years in this app, used tech stacks are Angular, Primeng, Bootstrap, Ngrx",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://turkish.turkpages.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "React Blog App",
    desc: "Developed for a lawyer client , React , Firebase, Bootstrap",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://fanciful-dragon-6a6bd3.netlify.app/",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Medium Blog App",
    desc: "Medium Clone , React , Firebase, Bootstrap",
    img: "https://images.pexels.com/photos/7267694/pexels-photo-7267694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://medium-clone-sanity.netlify.app/",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Airbnb App",
    desc: "Airbnb Clone React, Nextjs , Tailwindcss",
    img: "https://images.pexels.com/photos/4992463/pexels-photo-4992463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://airbnb-clone0.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
      <div className="h-full relative" ref={ref}>
        <div className="min-h-screen p-10">
          <h1 className="text-4xl font-bold text-center mb-10">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${item.color}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <a href={item.link} className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
        </div>
      </div>
  );
};

export default PortfolioPage;
