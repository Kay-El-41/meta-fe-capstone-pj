import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuCard from '../UI/MenuCard'
import { OrderContextCustom } from '../orderPage/OrderContext'

const OrderSection = () => {
  const {
    state: { meals },
  } = OrderContextCustom()
  // inside array destructuring

  return (
    <section className=" bg-white px-[15px] py-[50px] lg:px-[150px] xl:px-[250px] flex flex-col">
      <div className="flex justify-between">
        <h2 className=" font-markazi text-4xl">This Week's Specials</h2>
        <Link to="/order">
          <button className=" font-karla bg-yellow-lemon px-4 py-2 rounded-2xl active:scale-95">
            Order Online
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-5 p-5 md:flex-row justify-center">
        {meals[0].map((item) => {
          return <MenuCard key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default OrderSection
