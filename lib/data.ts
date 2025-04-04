import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import hnl from "@/public/hnl.png";
import namKart from "@/public/namKart.webp";
import realEstate from "@/public/realtor.png";
import aurum from "@/public/aurum.png";

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
    title: "Averlabz",
    location: "Pakistan, Lahore",
    description:
      "Experienced React.js developer with 3 years of expertise in building dynamic, responsive web applications. Proficient in Next.js, Redux, Ant Design, and Tailwind CSS for creating scalable UIs.Strong background in state management, API integration, performance optimization, and SEO best practices. Skilled in leveraging React hooks, context API, and @tanstack/react-query for efficient data fetching and handling.I am dedicated to fixing front-end issues to enhance both the functionality and overall user experience of the platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "NamKart",
    description:
      "This project is engineered to deliver a high-performance, responsive online shopping environment, where every UI element and API interaction is optimized for speed and reliability, ensuring an intuitive and efficient experience for users.",
    tags: ["Next js", "Tailwind", "Typescript", "React Query"],
    imageUrl: namKart,
    url: "https://market-place-neon.vercel.app/",
  },
  {
    title: "HNL",
    description:
      "Hitech Networks Ltd. HNL is one of the leading MS vendors in the country, working with all major telecom operators in Pakistan, maintaining around 12000 BTS and 20 Core sites. HNL project is an ERP system that helps an organization manage its day-to-day operations, including human resources, inventory, and supply chain management. The system includes modules for user management, attendance management, site management and many more.",
    tags: ["React", "Tailwind", "ReSend", "Redux"],
    imageUrl: hnl,
    url: "",
  },
  {
    title: "Real Estate App",
    description:
      "Embark on a seamless property exploration journey with my Real Estate App. Developed with precision using React and Next.js, this application delivers an immersive experience for users seeking their dream homes. With four years of expertise, I've crafted a platform that not only showcases properties elegantly but also ensures a user-friendly interface.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "React Query",
      "ReSend",
    ],
    imageUrl: realEstate,
    url: "https://real-esatate-three.vercel.app/",
  },
  {
    title: "Aurum",
    description:
      "Aurum is a unique online marketplace where you can purchase authentic items belonging to world-famous personalities. From T-shirts of renowned footballers like Cristiano Ronaldo, Aurum offers a variety of products. What sets Aurum apart is the ability to verify the authenticity of every product, ensuring that what you’re buying is 100% original. Aurum guarantees both authenticity and passion in every purchase.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: aurum,
    url: "",
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
  "Framer Motion",
] as const;
