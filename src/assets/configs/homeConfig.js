import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {
  greeting: (
    <h1 className="heading">
      Hi! I'm <strong className="main-name"> Kevin Shema</strong>
    </h1>
  ),
  titles: [
    "A Data Scientist",
    "A Project Manager",
    "A Machine Learning Specialist",
  ],
  about: {
    start:
      "I thrive at the intersection of data, intelligence, and strategic execution—transforming complexity into clarity and innovation into impact. " +
      "With a foundation in data science, expertise in machine learning, and a proven ability to manage high-impact projects, I bring a multifaceted approach to solving real-world problems.",
    exit:
      "Whether it's uncovering insights, engineering intelligent systems, or orchestrating collaborative success, " +
      "I am dedicated to delivering measurable value with precision and purpose.",
  },
  workTimeline: [
    {
      id: "work-4",
      title: "Project Manager",
      company: "Rubavu Tech Initiative",
      description:
        "Led cross-functional teams to deliver technology-driven solutions for local businesses and NGOs. Oversaw timelines, resources, and stakeholder engagement to ensure smooth execution and measurable impact.",
      date: "2023-Present",
      icon: <BiRocket />,
      tags: [
        "Agile & Scrum Methodologies",
        "Resource Planning",
        "Stakeholder Communication",
        "Risk Management",
        "Team Leadership",
        "Budget Oversight",
      ],
    },
    {
      id: "work-3",
      title: "Sr Data Scientist",
      company: "InsightBridge Analytics",
      description:
        "Analyzed and interpreted complex data sets to uncover actionable insights that informed strategic decisions. Delivered clear visualizations and built predictive models that enhanced operational efficiency and impact.",
      date: "2021-2023",
      icon: <DiCodeigniter />,
      tags: [
        "SQL",
        "Data Wrangling & Cleaning",
        "python",
        "Predictive Modeling",
        "Statistical Analysis",
        "Data Visualization (Tableau, Matplotlib)",
      ],
    },
    {
      id: "work-2",
      title: "Business Intelligence (BI) Manager",
      company: "Strategic Insights Ltd.",
      description:
        "Directed data-driven strategies by designing and implementing BI solutions that enhanced decision-making across departments. Translated business needs into analytical models and fostered a data-driven culture.",
      date: "2019-2021",
      icon: <FaMobileAlt />,
      tags: [
        "BI Tools (Power BI, Tableau)",
        "Data Warehousing",
        "ETL Processes",
        "Dashboard Development",
        "Cross-functional Collaboration",
        "Report Development",
        "KPIs & Performance Tracking",
      ],
    },
    {
      id: "work-1",
      title: "CRM Analytics Coordinator",
      company: "Rwanda Air",
      description:
        "Tech leader of a BI, Data Science and DBA team. " +
        "Build forecast models, data warehouse and Power BI dashboards.",
      date: "2018-2019",
      icon: <GiCommercialAirplane />,
      tags: ["ml", "mssql", "python", "docker", "pbi", "aws"],
    },
    {
      id: "work-0",
      title: "BI Analyst",
      company: "Bank of Kigali",
      description:
        "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
      date: "2016-2018",
      icon: <BsClipboardData />,
      tags: ["python", "sql", "pbi", "excel"],
    },
  ],
};

export default homeConfig;
