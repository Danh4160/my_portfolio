import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nfteaImg from "@/images/nftea_pic.jpeg"
import aiImg from "@/images/ai_pic.jpeg"
import resumehelperImg from "@/images/resume_helper_pic.jpg"

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
    title: "Graduated Software Engineering",
    location: "Montreal, CA",
    description:
      "I graduated McGill University with a bachelor's of Software Engineering with a 3.66 / 4.00 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Cloud Infrastructure Engineer Internship",
    location: "Montreal, CA",
    description:
      "I worked at Desjardins, a Montreal based financial institution. I deployed Azure services such as Azure Data Factory and Azure Machine learning as part of our project's cloud infrastructure.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Data Engineer Internship",
    location: "Montreal, CA",
    description:
      "I worked at Hydro-Quebec, Canada's largest power utility corporation. I processed their multiple sources of data for big data analytics.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "NFTEA (NFT) Marketplace",
    description:
      "Marketplace website to create (mint) and sell iconic Instagram posts as Non-Fungible-Tokens with Ethereum. I did the frontend and backend for the login and create account page.",
    tags: ["Vue", "Java", "JavaScript", "HTML", "CSS"],
    imageUrl: nfteaImg,
  },
  {
    title: "Resumer Helper",
    description:
      "I developed a machine learning model to help students assess how well-suited their CV is for various job titles.",
    tags: ["Python", "NLTK", "Sklearn", "Numpy"],
    imageUrl: resumehelperImg,
  },
  {
    title: "Artificial Intelligent Agent (Mini-Max)",
    description:
      "I developed an AI agent to participate in our class tournament. The agent plays based on the mini-max algorithm with alpha-beta pruning optimisation.",
    tags: ["Python", "Numpy"],
    imageUrl: aiImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "C",
  "Power BI",
  "Databricks",
  "Git",
  "Github",
  "Azure Devops",
  "YAML",
  "Angular",
  "REST API",
  "Vue",
  "React",
  "Next.js",
  "Framer Motion"
] as const;