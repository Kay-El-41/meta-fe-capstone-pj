import React from 'react'

const TestimonialCard = ({ rating, text, person, img }) => {
  return (
    <article className="w-[250px] xl:w-[250px] h-[250px] xl:h-[300px] bg-white p-4">
      <p className=" font-karla text-xl mb-3">{rating}</p>
      <div className="flex items-center justify-center gap-2">
        <img src={img} className="rounded-full w-[100px]" alt="person" />
        <h3 className='font-markazi text-2xl'>{person}</h3>
      </div>
      <p className=" font-karla text-sm mt-5">{text}</p>
    </article>
  )
}

export default TestimonialCard
