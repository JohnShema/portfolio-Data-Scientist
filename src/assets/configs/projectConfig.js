import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png";
import kafkaMl from "../images/kafkaml.png";
import portfolio from "../images/portfolio.png";

import React from "react";

const projectConfig = [
  {
    id: "project-5",
    title: "Sklearn Genetic Opt",
    links: [
      {
        name: "repo",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist.git",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist/forks",
        icon: <BiGitRepoForked />,
      },

      {
        name: "docs",
        url: "",
        icon: <ImBook />,
      },
    ],
    image: sklearnGenetic,
    description:
      "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
    target: "_blank",
  },
  {
    id: "project-3",
    title: "Kafkaml Anomalies",
    links: [
      {
        name: "repo",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist.git",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist/forks",
        icon: <BiGitRepoForked />,
      },
      {
        name: "docs",
        url: "",
        icon: <ImBook />,
      },
    ],
    image: kafkaMl,
    description:
      "Project for real-time anomaly detection using kafka and python.",
    target: "_blank",
  },
  {
    id: "project-2",
    title: "Pyworkforce",
    links: [
      {
        name: "repo",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist.git",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist/forks",
        icon: <BiGitRepoForked />,
      },

      {
        name: "docs",
        url: "",
        icon: <ImBook />,
      },
    ],
    image:
      "https://www.shutterstock.com/image-photo/rocky-shore-beach-andaman-sea-thailand-310965713",
    description:
      "Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",
    target: "_blank",
  },
  {
    id: "project-1",
    title: "Portfolio Web",
    links: [
      {
        name: "repo",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist.git",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist/forks",
        icon: <BiGitRepoForked />,
      },
      {
        name: "docs",
        url: "https://github.com/JohnShema/portfolio-Data-Scientist/blob/main/README.md",
        icon: <ImBook />,
      },
    ],
    image: portfolio,
    description: "Source code of my current portfolio web page.",
    target: "_blank",
  },
];

export default projectConfig;
