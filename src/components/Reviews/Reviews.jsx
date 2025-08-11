import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { testimonialsData } from "../data/data";
import "./Reviews.css";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title={"What Our Students Say"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Tempus commodo vitae id faucibus nunc."
          }
        />
        <div className="review-container">
          {testimonialsData.map((review) => (
            <div className="review" key={review.id}>
              <div className="review__profile">
                <span className="review__star">{review.star}</span>
                <p className="review__text">{review.description}</p>
                <img src={review.img} alt={review.title} />
                <div className="review__profile-info">
                  <h4>{review.name}</h4>
                  <p>{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
