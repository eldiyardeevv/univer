import { styled } from "@mui/material";
import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTwitter, FaOdnoklassnikiSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <Overlay />
      <div className="container">
        <Navs>
          <h2>Наш адрес</h2>
          <h2>Другие ссылки</h2>
          <h2>Следите за нами</h2>
        </Navs>
        <BlockContainer>
          <div style={{ padding: "20px 0 " }}>
            <h3>г. Бишкек, пр. Чуй, 4-В</h3>
            <Phone>
              <h3>Телефоны</h3>
              <a href="tel:+996312883810">+996 312 88 38 10</a>
              <a href="tel:+996312883811">+996 312 88 38 11</a>
              <a href="tel:+996552552778">+996 552 55 27 78</a>
              <p>E-mail: <a href="mailto:info@eu.kg">info@eu.kg</a></p>
            </Phone>
          </div>
          <div style={{ margin: "20px 0 " }}>
            <Linav>
              <li>Сайт выпускников</li>
              <li>Проекты</li>
              <li>Студенческая жизнь</li>
              <li>Партнеры</li>
              <li>Академические программы</li>
              <li>Труды ученых и студентов</li>
            </Linav>
          </div>
          <div style={{ margin: "20px 0 0 0", display: "flex", gap: 20 }}>
            <FaInstagramSquare style={{ color: "white" }} />
            <FaFacebookSquare style={{ color: "white" }} />
            <FaTwitter style={{ color: "white" }} />
            <FaOdnoklassnikiSquare style={{ color: "white" }} />
            <FaSquareWhatsapp style={{ color: "white" }} />
          </div>
        </BlockContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled("div")({
  position: "relative",
  background: `url('/img/photostudent.jpg') no-repeat center center/cover`,
  height: "300px",
  marginTop:-4,
  color: "white",
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(43, 135, 241, 0.8)", // Blue overlay with 50% opacity
});

const Navs = styled("div")({
  padding: "30px 0 0 150px",
  display: "flex",
  justifyContent: "space-between",
  width: "900px",
  zIndex: 1,
});

const Phone = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  gap: 7,
  zIndex: 1,
  a: {
    color: "white",
  },
});

const BlockContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "950px",
  marginLeft: "100px",
  zIndex: 1,
});

const Linav = styled("ul")({
  display: "flex",
  flexDirection: "column",
  gap: 7,
  zIndex: 1,
  listStyle: "none",
  padding: 0,
  margin: 0,
  li: {
    color: "white",
  },
});

