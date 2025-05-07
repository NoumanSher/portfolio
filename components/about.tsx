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
      <p>
        <span className="font-medium text-lg">MERN Stack Developer</span> with{" "}
        <span className="font-medium">2.7+ years</span> of experience building
        <span className="font-medium">
          {" "}
          responsive, scalable web applications
        </span>{" "}
        using
        <span className="font-medium"> React.js</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">Express.js</span>.
      </p>
      <p className="mt-2">
        Skilled in UI libraries like{" "}
        <span className="font-medium">Tailwind CSS</span>,{" "}
        <span className="font-medium">Ant Design</span>, and{" "}
        <span className="font-medium">Bootstrap</span>. Experienced with{" "}
        <span className="font-medium">state management</span> using{" "}
        <span className="font-medium">Redux</span>,{" "}
        <span className="font-medium">Context API</span>, and{" "}
        <span className="font-medium">React Query</span>.
      </p>
      <p className="mt-2">
        Proficient in <span className="font-medium">REST API integration</span>,{" "}
        <span className="font-medium">performance optimization</span>, and{" "}
        <span className="font-medium">SEO best practices</span>.
      </p>
      <p className="mt-2">
        Passionate about <span className="font-medium italic">clean code</span>,{" "}
        <span className="font-medium italic">user-centric design</span>, and{" "}
        <span className="font-medium italic">continuous learning</span>.
      </p>
    </motion.section>
  );
}
