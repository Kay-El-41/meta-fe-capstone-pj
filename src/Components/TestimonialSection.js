import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  const testimonials = [
    {
      rating: '3.5 Stars',
      text: 'I ordered the food , it arrived just in time for my birthday!',
      person: 'Kayden Anderson',
      img: 'https://randomuser.me/api/portraits/men/68.jpg',
    },
    {
      rating: '4.5 Stars',
      text: 'These food are absolute my favorite things to give as a gifts!',
      person: 'Kinsley Sanchez',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      rating: '4 Stars',
      text: 'Would definitely recommend Little Lemon Restaurant and will definitely be ordering again.',
      person: 'Leonardo Thompson',
      img: 'https://randomuser.me/api/portraits/men/72.jpg',
    },
    {
      rating: '5 Stars',
      text: 'I can always find something at Little Lemon Restaurant that I fall in love with instantly',
      person: 'Sarah Gonzalez',
      img: 'https://randomuser.me/api/portraits/women/70.jpg',
    },
  ]
  return (
    <section className='testimonial-section'>
      <h2>Testimonials</h2>
      <main>
        {testimonials.map((item) => {
          return <TestimonialCard {...item} key={item.person} />
        })}
      </main>
    </section>
  )
}

export default TestimonialSection
