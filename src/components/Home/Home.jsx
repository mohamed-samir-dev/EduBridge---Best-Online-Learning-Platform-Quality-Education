import React from "react";
import { cardData } from "../data/data"; 
import "./Home.css";

/**
 * Home Component
 */
export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            Explore the world of education and find the perfect course for you.
          </p>
          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>
        <div className="crd-container">
          {cardData.map((card) => (
            <div className="crd" key={card.id}>
              <div
                className="crd-icon"
                style={{ backgroundColor: card.bgColor }}
              >
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <span></span>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
