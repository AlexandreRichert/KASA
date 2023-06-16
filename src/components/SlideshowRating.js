import React from 'react';

export default function SlideshowRating(props) {
  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    const starClass = i < props.rating ? "fa-solid fa-star red" : "fa-solid fa-star gray";
    ratingStars.push(<i key={i} className={starClass}></i>);
  }

  return <div>{ratingStars}</div>;
}