import React from 'react'

const TestimonialCard = ({ rating, text, person, img }) => {
  return (
    <article>
      <p>{rating}</p>
      <div>
        <img src={img} alt="person" />
        <h3>{person}</h3>
      </div>
      <p>{text}</p>
    </article>
  )
}

export default TestimonialCard
