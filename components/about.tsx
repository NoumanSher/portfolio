"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        🚀 My journey began at <a className="text-[#1a1162] dark:text-white underline" href="https://averlabz.com/" target="_blank">Averlabz</a>  in 2019. Since then, I've been deeply involved in leveraging the power of   <span className="font-medium">
          React, Next.js
        </span> to bring cutting-edge solutions to life. I take pride in my ability to turn complex ideas into clean, maintainable code, ensuring a seamless user experience.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">, Node.js, MongoDB and React native</span>
      </p>
    </motion.section>
  );
}
