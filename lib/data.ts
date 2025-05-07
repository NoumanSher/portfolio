import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import hnl from "@/public/hnl.png";
import namKart from "@/public/namKart.webp";
import realEstate from "@/public/realtor.png";
import aurum from "@/public/aurum.png";
import tangle from "@/public/t1.webp";
import food from "@/public/f1.webp";
import tangleL from "@/public/tangleL.webp";
import ecommerce from "@/public/ecommerce.webp";

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
      "Developed and maintained scalable web applications using React js, Next js, and Node js. Led frontend architecture using Tailwind CSS, Redux, and Ant Design for responsive UIs. Integrated RESTful APIs and handled complex state management with Context API and React Query. Focused on optimizing performance, SEO, and fixing critical front-end issues for better UX. Collaborated closely with cross-functional teams to deliver high-quality, maintainable code.",
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
  {
    title: "E-commerce Backend",
    description:
      "Built complete backend: authentication, category/product management, wishlist, cart & checkout. Deployed app on Vercel for scalability.",
    tags: ["Node js", "Express Js", "MongoDB", "Mongoose"], 
    imageUrl: ecommerce,
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
  "MERN stack",
  "MongoDB",
  "Express.js",
  "Node.js",
  "React Query",
  "Formik",
  "Ant Design",
  "Bootstrap",
] as const;
