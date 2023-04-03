import React, { useEffect, useState } from 'react'
import { OrderContextCustom } from '../orderPage/OrderContext'

const OrderListItem = (props) => {
  const { id, name, price } = props
  const { increasePrice, decreasePrice } = props

  const [quantity, setQuantity] = useState(1)
  const [mealPrice, setMealPrice] = useState(price)
  const { dispatch } = OrderContextCustom()

  useEffect(() => {
    if (quantity == 0) {
      dispatch({ type: 'REMOVE_ORDER', payload: id })
    } else {
      setMealPrice(price * quantity)
    }
  }, [quantity])

  const increaseOrderItem = () => {
    setQuantity(quantity + 1)
    increasePrice(price)
  }

  const decreaseOrderItem = () => {
    setQuantity(quantity - 1)
    decreasePrice(price)
  }

  return (
    <>
      <div className="flex">
        <h3 className="w-1/3">{name}</h3>

        <div className="w-1/3 flex justify-center">
          <button className="select-none text-lg" onClick={decreaseOrderItem}>
            - &nbsp;
          </button>
          <span className="select-none text-lg">{quantity}</span>
          <button className="select-none text-lg" onClick={increaseOrderItem}>
            &nbsp; +
          </button>
        </div>
        <p className="w-1/3 text-right">
          $ {mealPrice.toFixed(2)}
        </p>
      </div>
      <hr />
    </>
  )
}

export default OrderListItem
