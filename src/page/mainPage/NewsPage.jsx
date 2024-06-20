import React, { useState } from "react";
import { data } from "../../data/data";


const NewsPage = () => {
  const [expanded, setExpanded] = useState(Array(data.length).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const truncateText = (text, isExpanded) => {
    if (isExpanded) {
      return text;
    }
    if (text.length > 350) {
      return `${text.substring(0, 400)} ...`;
    }
    return text;
  };

  return (
    <div className="container">
      <div style={{ margin: "50px 0" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <span style={{ color: "red" }}>H</span>овости
        </h1>
        {data.map((el, i) => (
          <div key={i} >
            <h3 style={{ margin: "5px 0", color: "blue" }}>{el.title}</h3>
            <div style={{ display: "flex", gap: 20 }}>
              <img style={{ width: 200, height: 100 }} src={el.img} alt="img" />
              <div>
                <h3>{truncateText(el.description, expanded[i])}</h3>
                {el.description.length > 400 && (
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={() => toggleExpand(i)}
                  >
                    {expanded[i] ? "закрыт" : "читать дальше"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
