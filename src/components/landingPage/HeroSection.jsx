import React from 'react'
import heroImage from '/src/assets/restaurant-food.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className=" bg-green-lemon px-[15px] lg:px-[150px] xl:px-[250px] flex flex-col lg:flex-row lg:items-center lg:gap-10">
      <div className="flex flex-col lg:w-1/2">
        <h1 className="font-markazi text-5xl mt-5 text-yellow-lemon">Little Lemon</h1>
        <h2 className="font-markazi text-4xl text-white">Chicago</h2>
        <p className=" font-karla text-md mt-5 text-white">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/reservation">
          <button className=" font-karla bg-yellow-lemon px-4 py-2 rounded-2xl my-5">
            Reserve a Table
          </button>
        </Link>
      </div>
      <img
        src={heroImage}
        className=" w-full md:h-[400px] object-cover relative top-5 lg:w-1/2 rounded-xl"
      />
    </section>
  )
}

export default HeroSection
