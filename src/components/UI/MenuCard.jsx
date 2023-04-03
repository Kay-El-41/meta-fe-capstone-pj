import React from 'react'
import { OrderContextCustom } from '../orderPage/OrderContext'

const MenuCard = (props) => {
  const { image, price, description, name } = props
  const { dispatch } = OrderContextCustom()

  const addToOrder = () => {
    dispatch({ type: 'ADD_ORDER', payload: props })
  }

  return (
    <article className="relative w-[300px] h-[500px] lg:h-[400px] xl:h-[500px] rounded-t-xl bg-gray-lemon">
      <img
        src={image}
        className="rounded-t-xl object-cover w-full h-[50%] lg:h-[35%] xl:h-[40%]"
      />
      <div className=" flex flex-col gap-5 p-5">
        <div className="flex justify-between">
          <h3 className="font-markazi text-2xl">{name}</h3>
          <p className="font-markazi text-2xl text-yellow-lemon">${price}</p>
        </div>
        <p className="font-karla text-sm">{description}</p>
        <button className="font-karla absolute bottom-5 hover:text-yellow-lemon active:scale-95" onClick={addToOrder}>
          Order a delivery
        </button>
      </div>
    </article>
  )
}

export default MenuCard
