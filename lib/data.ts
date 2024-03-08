import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hnl from "@/public/hnl.png";
import realEstate from "@/public/realtor.png";
import aurum from "@/public/aurum.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HNL",
    description:
      "Hitech Networks Ltd. HNL is one of the leading MS vendors in the country, working with all major telecom operators in Pakistan, maintaining around 12000 BTS and 20 Core sites. HNL project is an ERP system that helps an organization manage its day-to-day operations, including human resources, inventory, and supply chain management. The system includes modules for user management, attendance management, site management and many more.",
    tags: ["React", "Tailwind",'ReSend','Redux'],
    imageUrl: hnl,
  },
  {
    title: "Real Estate App",
    description:
      "Embark on a seamless property exploration journey with my Real Estate App. Developed with precision using React and Next.js, this application delivers an immersive experience for users seeking their dream homes. With four years of expertise, I've crafted a platform that not only showcases properties elegantly but also ensures a user-friendly interface.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "React Query","ReSend"],
    imageUrl: realEstate,
  },
  {
    title: "Aurum",
    description:
      "Aurum is a unique online marketplace where you can purchase authentic items belonging to world-famous personalities. From T-shirts of renowned footballers like Cristiano Ronaldo, Aurum offers a variety of products. What sets Aurum apart is the ability to verify the authenticity of every product, ensuring that what you’re buying is 100% original. Aurum guarantees both authenticity and passion in every purchase.",
    tags: ["React", "express", "Redux", "Tailwind", "Redux"],
    imageUrl: aurum,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git-Hub",
  "Tailwind",
  "Api integration",
  "Redux",
  "GraphQL",
  "Framer Motion",
] as const;
