import { styled } from "@mui/material";
import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="container">
      <div
        style={{
          padding: "150px 0 20px 0",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Block>
          <h2>Университет</h2>
          <Link to="university" style={{ fontSize: 100, color: "red" }}>
            <FaUniversity />
          </Link>
          <p>Набор абитуриентов на очную и дистанционную формы обучения</p>
        </Block>
        <Block>
          <h2>Колледж</h2>
          <Link to="college" style={{ fontSize: 100, color: "red" }}>
            <FaGraduationCap />
          </Link>
          <p>Набор абитуриентов на базе 9-11 классов</p>
        </Block>
        <Block>
          <h2>Школа-лицей</h2>
          <Link to="school" style={{ fontSize: 100, color: "red" }}>
            <FaSchool />
          </Link>
          <p>
            Евразийская школа-лицей набирает на обучение на базе 7-9 классов с
            выдачей аттестата
          </p>
        </Block>
      </div>
    </div>
  );
};

export default AboutPage;

const Block = styled("div")(() => ({
  width: "350px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
  background: "rgba(253, 253, 253, 0.8)",
  borderRadius: "5px",
  textAlign: "center",
  padding: "20px 0",
  h2: {
    color: "red",
    fontSize: "34px",
  },
  p: {
    width: "300px ",
  },
}));
