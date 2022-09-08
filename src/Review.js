import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [pos, setPos] = useState(0);
  const { name, job, image, text } = people[pos];

  const handlePrev = () => {
    setPos(pos > 0 ? pos - 1 : people.length - 1);
  };
  const handleNext = () => {
    setPos(pos < people.length - 1 ? pos + 1 : 0);
  };
  const handleRandom = () => {
    setPos(Math.floor(Math.random() * people.length));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
