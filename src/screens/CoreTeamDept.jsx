import React, { useLayoutEffect } from "react";
import Card from "../components/DeptCard";

import { useParams, useLocation } from "react-router-dom";

import "../styles/coreTeamDept.css";
import data from "../data/CoreDept.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CoreTeamDept = () => {
  const { dept } = useParams();

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);


  let dataArr = [];
  let title;
  switch (dept) {
    case "media":
      dataArr = data.media;
      title = "Media team";
      break;

    case "artAndDesign":
      dataArr = data.artAndDesign;
      title = "Art and Design team";
      break;

    case "developer":
      dataArr = data.developer;
      title = "Website Developers";
      break;

    case "Coding":
      dataArr = data.Coding;
      title = "Coding Team";
      break;

    case "Cultural":
      dataArr = data.Cultural;
      title = "Cultural Team";
      break;

    case "ESummit":
      dataArr = data.ESummit;
      title = "E-Cell Team";
      break;

    case "Content":
      dataArr = data.Content;
      title = "Content Team";
      break;

    case "Robotics":
      dataArr = data.Robotics;
      title = "Robotics Team";
      break;

    case "management":
      dataArr = data.management;
      title = "Management Team";
      break;

    case "pr":
      dataArr = data.PR;
      title = "PR and Outreach Team";
      break;

    case "Sports":
      dataArr = data.sports;
      title = "Sports Team";
      break;

    default:
      break;
  }

  console.log(dataArr);

  return (
    <>
      <Navbar /> 
      <h1>{title}</h1>
      <div className="card-container">
        {dataArr.map((data) => {
          return (
            <Card
              photo={data.image}
              name={data.name}
              designation={data.designation}
            />
          );
        })}
      </div>
      <Footer/>
    </>
  );
};

export default CoreTeamDept;
