import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("Featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web App",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfoilo</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/profile.jpg" alt="portfolio" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/profile.jpg" alt="portfolio" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/profile.jpg" alt="portfolio" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/profile.jpg" alt="portfolio" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/profile.jpg" alt="portfolio" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/profile.jpg" alt="portfolio" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
