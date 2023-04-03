import React from 'react'
import imgA from '/src/assets/ownersA.jpg'
import imgB from '/src/assets/ownersB.jpg'

const AboutSection = () => {
  return (
    <section className=" bg-white px-[15px] py-10 lg:py-20 lg:px-[150px] h-[700px] flex flex-col lg:flex-row lg:gap-10">
      <div className="lg:w-1/2 flex flex-col lg:mt-[100px]">
        <h1 className="font-markazi text-5xl text-yellow-lemon">Little Lemon</h1>
        <h2 className="font-markazi text-4xl">Chicago</h2>
        <p className="font-karla text-md my-5">
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="relative lg:w-1/2">
        <img
          src={imgA}
          className="absolute object-cover w-[500px] right-10 lg:w-[250px] lg:right-[20px] lg:h-[400px] xl:w-[400px]"
        />
        <img
          src={imgB}
          className="absolute object-cover w-[350px] left-10 top-[150px] lg:w-[250px] lg:top-[200px]  lg:h-[350px] xl:w-[400px] "
        />
      </div>
    </section>
  )
}

export default AboutSection
