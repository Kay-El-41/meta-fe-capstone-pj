import React from 'react'
import { testimonials } from '/src/onlineData'
import TestimonialCard from '../UI/TestimonialCard'
import { useState } from 'react'

const TestimonialSection = () => {
  const [data, setData] = useState(testimonials)
  return (
    <section className=" bg-gray-lemon px-[15px] py-[50px] lg:px-[150px] flex flex-col items-center">
      <h2 className='font-markazi text-4xl mb-10'>Testimonials</h2>
      <main className='flex flex-wrap justify-center gap-10'>
        {data.map((item) => {
          return <TestimonialCard {...item} key={item.person} />
        })}
      </main>
    </section>
  )
}

export default TestimonialSection
