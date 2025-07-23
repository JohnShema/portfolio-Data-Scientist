import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png";

const blogConfig = [
  {
    id: "blog-8",
    title: "How to Solve Scheduling Problems in Python",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
    ],
    image: "https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",
    description:
      "Use linear programming to minimize the difference between required and scheduled resources.",
    target: "_blank",
  },
  {
    id: "blog-7",
    title: "Adaptive Parameters Methods for Machine Learning",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
    ],
    image: "https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",
    description:
      "Let's explore some methods to adapt your parameters over time.",
    target: "_blank",
  },
  {
    id: "blog-6",
    title: "Evolutionary Feature Selection for Machine Learning",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
    ],
    image: "https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",
    description:
      "Learn how to make feature selection for machine learning algorithms using evolutionary models.",
    target: "_blank",
  },
  {
    id: "blog-5",
    title: "Real-time anomaly detection with Apache Kafka and Python",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
      {
        name: "repo",
        url: "",
        icon: <AiFillGithub />,
      },
    ],
    image: "https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",
    description:
      "Learn how to make predictions over streaming data coming from Kafka using Python.",
    target: "_blank",
  },
  {
    id: "blog-4",
    title: "Serve a machine learning model using Sklearn, FastAPI, and Docker",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
      {
        name: "repo",
        url: "",
        icon: <AiFillGithub />,
      },
    ],
    image: fastapiSklearn,
    description:
      "Get your model machine learning model to production as a containerized API.",
    target: "_blank",
  },
  {
    id: "blog-3",
    title: "Are You Still Using Grid2 Search for Hyperparameters Optimization?",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
    ],
    image: "https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",
    description:
      "Let's discuss the ideas behind how to search in a smart fashion the hyperparameters for your machine learning models.",
    target: "_blank",
  },
  {
    id: "blog-2",
    title: "Tune Your Scikit-learn Model Using Evolutionary Algorithms",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
    ],
    image: "https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",
    description:
      "Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",
    target: "_blank",
  },
  {
    id: "blog-1",
    title: "Manage your machine learning life cycle with MLflow in Python",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
      {
        name: "repo",
        url: "",
        icon: <AiFillGithub />,
      },
    ],
    image: "https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",
    description: "Model lifecycle management using mlflow",
    target: "_blank",
  },
  {
    id: "blog-0",
    title: "Workforce planning optimization using Python",
    links: [
      {
        name: "article",
        url: "",
        icon: <SiMedium />,
      },
    ],
    image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    description:
      "Learn how to find the optimal number of positions needed to manage incoming traffic.",
    target: "_blank",
  },
];

export default blogConfig;
