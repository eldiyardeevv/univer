import { ThemeProvider } from "@mui/material/styles";
import { createTheme, styled } from "@mui/material/styles";
import React from "react";
import Slider from "react-slick";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const HomePage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const [expanded, setExpanded] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeTwo = (panel) => (event, isExpanded) => {
    setExpandedTwo(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Nav>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ background: "transparent", color: "white" }}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ flexShrink: 0 }}>ОБ УНИВЕРСИТЕТЕ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 12, margin: "5px 0" }}>
                Руководство
              </Typography>
              <Typography sx={{ fontSize: 12, margin: "5px 0" }}>
                Струтура
              </Typography>
              <Typography
                sx={{ fontSize: 12, margin: "5px 0", width: "177px" }}
              >
                Направления и специализаций университета
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedTwo === "panel2"}
            onChange={handleChangeTwo("panel2")}
            sx={{ background: "transparent", color: "white" }}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ flexShrink: 0 }}>О КОЛЛЕДЖЕ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: 12, margin: "5px 0", width: "175px" }}
              >
                Направления и специализаций Колледжа
              </Typography>
            </AccordionDetails>
          </Accordion>
          <a>НПА</a>
          <a>БИБЛИОТЕКА</a>
          <a>AVN</a>
          <a>СОНТАКТ</a>
        </Nav>
        <div>
          <Slider {...settings}>
            <div style={{ margin: "20px 0" }}>
              <Title>Дистанционное обучение</Title>
              <Text>
                В связи с пандемией все студенты перешли на дистанционное
                обучение...!
              </Text>
              <Btn>Узнать больше</Btn>
            </div>
            <div style={{ margin: "20px 0" }}>
              <Title>Сервис G-Suite</Title>
              <Text>
                Облачный сервис G-Suite удобный инструмент для дистанционного
                обучения
              </Text>
              <Btn>Узнать больше</Btn>
            </div>
            <div style={{ margin: "20px 0" }}>
              <Title>ABH</Title>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                ab molestias dolorem quisquam porro saepe, placeat nostrum
                accusamus voluptatum omnis consequatur quas earum fugiat.
                Quibusdam id libero molestias tempore dignissimos.
              </Text>
              <Btn>Узнать больше</Btn>
            </div>
          </Slider>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;

const Nav = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "90px",
  padding: "50px 0",
  color: "white",

  // "& a": {
  //   cursor: "pointer",
  //   textDecoration: "none",
  //   color: "white",
  //   transition: "background 0.3s, transform 0.3s", // добавляем плавный переход
  //   "&:hover": {
  //     background: "#234545",
  //     transform: "scale(1.1)", // увеличиваем размер при наведении
  //   },
  // },
}));

const Title = styled("h1")(() => ({
  fontSize: "40px",
  color: "white",
  width: 320,
}));

const Text = styled("p")(() => ({
  fontSize: "24px",
  width: 530,
  color: "white",
  margin: "30px 0",
  fontWeight: 600,
}));

const Btn = styled("p")(() => ({
  fontSize: "24px",
  width: "160px",
  color: "white",
  padding: "12px 30px",
  borderRadius: "8px",
  background: "blue",
  margin: "80px 0 0 300px",
  cursor: "pointer",
}));
