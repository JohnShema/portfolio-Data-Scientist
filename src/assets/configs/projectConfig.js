import { BiGitRepoForked } from "react-icons/bi";
// eslint-disable-next-line no-unused-vars
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import Heart_Stroke_Predictions_Model from "../images/Heart_Stroke_Predictions_Model.png";
import Fraud_mindmap from "../images/Fraud_mindmap.png";
import Music_Recommendation from "../images/Music_Recommendation.png";
import Portfolio_Website from "../images/Portfolio_Website.jpg";

import React from "react";

const projectConfig = [
  {
    id: "project-5",
    title: "Heart Stroke Predictions Model",
    links: [
      {
        name: "repo",
        url: "https://github.com/ShemaKevin62/Heart-Stroke-Prediction.git",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/ShemaKevin62/Heart-Stroke-Prediction/fork",
        icon: <BiGitRepoForked />,
      },

      {
        name: "docs",
        url: "https://github.com/ShemaKevin62/Heart-Stroke-Prediction/blob/master/README.md#heart-stroke-predictions-model-in-production",
        icon: <ImBook />,
      },
    ],
    image: Heart_Stroke_Predictions_Model,
    description:
      "Predicts the likelihood of a stroke based on patient health indicators. By analyzing key medical metrics such as blood pressure, age, and lifestyle factors, the system delivers an accurate prediction of stroke probability tailored to each individual's health profile. #Python #ML #Classification",
    target: "_blank",
  },
  {
    id: "project-3",
    title: "Transaction Fraud Detection",
    links: [
      {
        name: "repo",
        url: "https://github.com/ShemaKevin62/Transaction-Fraud-Detection.git",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/ShemaKevin62/Transaction-Fraud-Detection/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "docs",
        url: "https://github.com/ShemaKevin62/Transaction-Fraud-Detection/tree/main?tab=readme-ov-file#transaction-fraud-detection",
        icon: <ImBook />,
      },
    ],
    image: Fraud_mindmap,
    description:
      "Identifies fraudulent financial transactions using classification models. By analyzing transaction patterns and anomalies, the system leverages machine learning classification techniques to detect and flag potentially fraudulent activity. #Python #SMOTE #Random_Forest",
    target: "_blank",
  },
  {
    id: "project-2",
    title: "Spotify Song Prediction and Recommendation System",
    links: [
      {
        name: "repo",
        url: "https://github.com/ShemaKevin62/Spotify-Song-Prediction-and-Recommendation-System.git",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/ShemaKevin62/Spotify-Song-Prediction-and-Recommendation-System/fork",
        icon: <BiGitRepoForked />,
      },

      {
        name: "docs",
        url: "https://github.com/ShemaKevin62/Spotify-Song-Prediction-and-Recommendation-System?tab=readme-ov-file#",
        icon: <ImBook />,
      },
    ],
    image: Music_Recommendation,
    description:
      "Predicts song popularity and recommends songs using audio features. #Python #Scikit-learn #ML",
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
    image: Portfolio_Website,
    description:
      "The source code of my current portfolio web page showcases my technical skills, featuring clean architecture, responsive design, and dynamic content tailored to professional roles in data science, machine learning, and project management.",
    target: "_blank",
  },
];

export default projectConfig;
