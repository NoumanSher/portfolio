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
    title: "Hitech Networks Ltd",
    location: "Pakistan, Lahore",
    description:
      "As a Frontend Developer at Averlabz, I worked on an extensive ERP system project for two years. This system was designed to streamline the organization’s daily operations, including human resources, inventory, and supply chain management. It featured various modules for user management, attendance management, site management, and more.The project was built on the ABP boilerplate. My primary responsibilities were on the frontend side, where I utilized React, TypeScript, and MobX to create an interactive and user-friendly interface. Although .NET was used for the backend, my focus remained on frontend development.This experience allowed me to contribute to a leading MS vendor in the country, working with all major telecom operators in Pakistan, and maintaining around 12,000 BTS and 20 Core sites. It was an opportunity to apply and enhance my skills in a real-world, large-scale project.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "AGRI-BANK",
    location: "Pakistan, Lahore",
    description:
      "As a Frontend Developer on the AGRI-BANK project, I contributed to the development of a loan-based application tailored specifically for farmers. My primary responsibility was the frontend development, where I utilized React.js with TypeScript and MobX for state management.During my tenure, I collaborated closely with the team to translate project requirements into intuitive user interfaces. I played a key role in implementing features that allowed farmers to calculate the approximate costs of seeding, fertilizer, and pesticide usage, as well as estimating crop yield based on land size and crop type.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Madam Portal",
    location: "Pakistan, Lahore",
    description:
      "I worked on a project called ‘Madam Portal’, an innovative platform that allows users to rent high-end clothing for a specific duration. This service is particularly beneficial for those who need expensive attire, such as bridal or party suits, for a short period. The actual price of these clothes can be quite high, making this rental service a cost-effective solution. Madam Portal offers flexible subscription plans, including one-month and three-month options, providing users with access to a wide range of premium clothing. This project was a unique opportunity to combine technology and fashion, providing a practical solution to a common problem",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Aurum",
    location: "Pakistan, Lahore",
    description:
      "As a Frontend Developer, I was instrumental in building the user interface using React and Next.js. I also utilized Tailwind CSS for styling and React Query for state management. My contributions ensured a seamless and user-friendly experience, making the process of purchasing authentic items easy and enjoyable.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Real Estate",
    location: "Pakistan, Lahore",
    description:
      "With four years of expertise, I’ve crafted a platform that not only meets the needs of prospective homeowners but also enhances their property search experience. The application is developed with a tech stack that includes React, TypeScript, Next.js, Tailwind, React Query, and ReSend, demonstrating my proficiency in these technologies.This project has been a testament to my ability to combine technical skills with a deep understanding of user needs, resulting in a product that transforms the way users explore properties.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "HNL",
    description:
      "Hitech Networks Ltd. HNL is one of the leading MS vendors in the country, working with all major telecom operators in Pakistan, maintaining around 12000 BTS and 20 Core sites. HNL project is an ERP system that helps an organization manage its day-to-day operations, including human resources, inventory, and supply chain management. The system includes modules for user management, attendance management, site management and many more.",
    tags: ["React", "Tailwind",'ReSend','Redux'],
    imageUrl: hnl,
    url:''
  },
  {
    title: "Real Estate App",
    description:
      "Embark on a seamless property exploration journey with my Real Estate App. Developed with precision using React and Next.js, this application delivers an immersive experience for users seeking their dream homes. With four years of expertise, I've crafted a platform that not only showcases properties elegantly but also ensures a user-friendly interface.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "React Query","ReSend"],
    imageUrl: realEstate,
    url:"https://realtor-web-drab.vercel.app"
  },
  {
    title: "Aurum",
    description:
      "Aurum is a unique online marketplace where you can purchase authentic items belonging to world-famous personalities. From T-shirts of renowned footballers like Cristiano Ronaldo, Aurum offers a variety of products. What sets Aurum apart is the ability to verify the authenticity of every product, ensuring that what you’re buying is 100% original. Aurum guarantees both authenticity and passion in every purchase.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: aurum,
    url:'https://www.aurummt.com'
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
