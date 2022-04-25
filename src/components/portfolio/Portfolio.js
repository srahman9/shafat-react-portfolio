import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
          
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>     
          </div>
        ))}
        {data.map((d) => (
          <div className="item">
              <a href={d.url} class="button">{d.title} Application</a>
          </div>
        ))}
        {data.map((d) => (
          <div className="item">
              <a href={d.github} class="button">{d.title} Github</a>
          </div>
          
        ))}

      </div>
    </div>
  );
}