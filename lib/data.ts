import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import store from "@/public/ecom-store.png";
import cms from "@/public/CMS.png";
import nottodo from "@/public/not-todo.png";
import expense from "@/public/expense.png";
import calculator from "@/public/calculator.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "E-commerce Store(IceStrike)",
    description:
      "Elevated e-commerce: MERN, CMS, secure, and optimized for seamless shopping.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node.js","JWT","Redux","Stripe"],
    imageUrl: store,
    github_url:'https://github.com/Srijan1231/ecomm_store_frontend',
    live_url:"http://icestrike-frontend-store.s3-website-ap-southeast-2.amazonaws.com/",
  },
  {
    title: "Content Management System(CMS)",
    description:
      "Tailored MERN CMS streamlines e-commerce: dynamic product management, secure payments, and business growth.",
    tags: ["React", "Express", "MongoDB", "Bootstrap", "Node.js","JWT","Redux","chartjs"],
    imageUrl: cms,
    github_url:"https://github.com/Srijan1231/Snowgear_Ecomm_CMS_frontend",
    live_url:"http://icestrike-ecomm.s3-website-ap-southeast-2.amazonaws.com/" 
  },
  {
    title: "Expense Tracker",
    description:
      "An expense tracker app built with Next.js and Firebase, providing secure authentication and real-time database updates for efficient financial management.",
    tags: ["React", "Next.js", "Firebase", "Tailwind","chartjs"],
    imageUrl: expense,
    github_url:"https://github.com/Srijan1231/expense_tracker_nextjs",
    live_url:"https://expense-tracker-nextjs-five.vercel.app/",
  },
  {
    title: "Not-To Do App",
    description:
      "A MERN-based not-to-do app that helps users track and avoid unproductive or undesirable tasks and behaviors with intuitive features.",
    tags: ["React","Express","MongoDB","Node.js"],
    imageUrl: nottodo,
    github_url:"https://github.com/Srijan1231/not-to-do-list",
    live_url:"https://to-do-list-basic-self.vercel.app/",
  },
  {
    title: "Calculator",
    description:
      "A MERN-based calculator app for performing basic arithmetic operations with a user-friendly interface.",
    tags: ["React","Express","MongoDB","Node.js"],
    imageUrl: calculator,
    github_url:"https://github.com/Srijan1231/react-calc",
    live_url:"https://react-calc-gray.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "JWT",
  "Express",
  "Authentication",
  " Authorization",
  "Stripe Integration"
  
] as const;
