import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import hnl from "@/public/hnl.png";
import namKart from "@/public/namKart.webp";
import realEstate from "@/public/realtor.png";
import aurum from "@/public/aurum.png";
import tangle from "@/public/t1.webp";
import food from "@/public/f1.webp";
import tangleL from "@/public/tangleL.webp";

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
    title: "Tangle (Fashion Store)",
    description:
      "An innovative e-commerce store, I oversee both design and functionality to ensure a seamless shopping experience. This project leverages a modern tech stack—Next.js, TypeScript, Tailwind CSS, React Query, And Formik—allowing for high-performance,Responsive user interfaces. Additionally, the integration of i18n facilitates multi-language support, Broadening the platform's accessibility and reach",
    tags: ["Next js", "Tailwind", "Typescript", "React Query"],
    imageUrl: tangle,
    url: "https://store.tanglebuild.com/en/tanglestore",
  },
  {
    title: "Tangle (Food Store)",
    description:
      "An innovative e-commerce store, I oversee both design and functionality to ensure a seamless shopping experience. This project leverages a modern tech stack—Next.js, TypeScript, Tailwind CSS, React Query, And Formik—allowing for high-performance,Responsive user interfaces. Additionally, the integration of i18n facilitates multi-language support, Broadening the platform's accessibility and reach",
    tags: ["Next js", "Tailwind", "Typescript", "React Query"],
    imageUrl: food,
    url: "https://store.tanglebuild.com/en/foodie",
  },
  {
    title: "NamKart",
    description:
      "This project is engineered to deliver a high-performance, responsive online shopping environment, where every UI element and API interaction is optimized for speed and reliability, ensuring an intuitive and efficient experience for users.",
    tags: ["Next js", "Tailwind", "Typescript", "React Query"],
    imageUrl: namKart,
    url: "https://market-place-neon.vercel.app/",
  },
  {
    title: "Mubaader Realtor",
    description:
      "Embark on a seamless property exploration journey with my Mubaader Realtor. Developed with precision using React and Next.js, this application delivers an immersive experience for users seeking their dream homes. With four years of expertise, I've crafted a platform that not only showcases properties elegantly but also ensures a user-friendly interface.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "React Query",
      "Ant Design",
    ],
    imageUrl: realEstate,
    url: "https://www.mubaaderealtor.com/",
  },
  {
    title: "Tangle Landing page",
    description:
      "Tangle Landing Page is a website designed to guide users on how to customize their Tangle Store. It provides detailed information on available customization options and helps users choose the right package for their needs.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "React Query",
    ],
    imageUrl: tangleL,
    url: "https://admin-over-view.vercel.app/",
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
