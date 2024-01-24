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
    title: "Dented Code, Software Development Bootcamp",
    location: "Sydney, NSW",
    description:
      "I graduated after 6 months of studying",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Rebb Tech, Software Engineering Internship",
    location: "Sydney, NSW",
    description:
      "Developed and maintained responsive web apps with React, Next.js, and Zustand, collaborating seamlessly with backend developers to integrate RESTful APIs, while implementing Jest for unit tests and prioritizing continuous learning and code documentation.",
    icon: React.createElement(CgWorkAlt),
    date: "October-2023",
  },

] as const;

export const projectsData = [
  {
    title: "E-commerce Store(IceStrike)",
    description:
      "Elevated e-commerce: MERN, CMS, secure, and optimized for seamless shopping.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node.js", "JWT", "Redux", "Stripe"],
    imageUrl: store,
    github_url: 'https://github.com/Srijan1231/ecomm_store_frontend',
    live_url: "http://icestrike-frontend-store.s3-website-ap-southeast-2.amazonaws.com/",
  },
  {
    title: "Content Management System(CMS)",
    description:
      "Tailored MERN CMS streamlines e-commerce: dynamic product management, secure payments, and business growth.",
    tags: ["React", "Express", "MongoDB", "Bootstrap", "Node.js", "JWT", "Redux", "chartjs"],
    imageUrl: cms,
    github_url: "https://github.com/Srijan1231/Snowgear_Ecomm_CMS_frontend",
    live_url: "http://icestrike-ecomm.s3-website-ap-southeast-2.amazonaws.com/"
  },
  {
    title: "Expense Tracker",
    description:
      "An expense tracker app built with Next.js and Firebase, providing secure authentication and real-time database updates for efficient financial management.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "chartjs"],
    imageUrl: expense,
    github_url: "https://github.com/Srijan1231/expense_tracker_nextjs",
    live_url: "https://expense-tracker-nextjs-five.vercel.app/",
  },
  {
    title: "Not-To Do App",
    description:
      "A MERN-based not-to-do app that helps users track and avoid unproductive or undesirable tasks and behaviors with intuitive features.",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    imageUrl: nottodo,
    github_url: "https://github.com/Srijan1231/not-to-do-list",
    live_url: "https://to-do-list-basic-self.vercel.app/",
  },
  {
    title: "Calculator",
    description:
      "A MERN-based calculator app for performing basic arithmetic operations with a user-friendly interface.",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    imageUrl: calculator,
    github_url: "https://github.com/Srijan1231/react-calc",
    live_url: "https://react-calc-gray.vercel.app/",
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
