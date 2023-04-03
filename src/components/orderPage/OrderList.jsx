import React, { useEffect, useState } from 'react'
import OrderListItem from '../UI/OrderListItem'
import { OrderContextCustom } from './OrderContext'

const OrderList = () => {
  const {
    state: { orderedMeals },
    dispatch,
  } = OrderContextCustom()

  const orderedPrice = orderedMeals?.reduce((pv, cv) => pv + cv.price, 0)

  const [total, setTotal] = useState(orderedPrice)
  const [tax, setTax] = useState(0)
  const [deliveryCharges, setDeliveryCharges] = useState(0)
  const [mainTotal, setMainTotal] = useState(0)

  useEffect(() => {
    setTax(total * 0.06)
    total > 0 ? setDeliveryCharges(10) : setDeliveryCharges(0)
  }, [total])

  useEffect(() => {
    setMainTotal(total + tax + deliveryCharges)
  }, [total, tax, deliveryCharges])

  const increasePrice = (price) => {
    setTotal(total + price)
  }

  const decreasePrice = (price) => {
    setTotal(total - price)
  }

  const clearOrders = () => {
    dispatch({ type: 'CLEAR_ORDERS' })
  }

  return (
    <div className="font-karla bg-white px-[15px] py-10 lg:px-[150px] xl:px-[250px]">
      <h1 className="font-markazi text-5xl my-5">Order List</h1>

      {orderedMeals.length > 0 ? (
        <>
          <main className="flex flex-col gap-2 ">
            {orderedMeals.map((item) => {
              return (
                <OrderListItem
                  key={item.id}
                  {...item}
                  increasePrice={increasePrice}
                  decreasePrice={decreasePrice}
                />
              )
            })}

            <hr />

            <div className="flex justify-between">
              <h3>Ordered</h3>
              <p>$ {total.toFixed(2)}</p>
            </div>

            <div className="flex justify-between">
              <h3>Tax</h3>
              <p>$ {tax.toFixed(2)}</p>
            </div>

            <div className="flex justify-between">
              <h3>Delivery Charges</h3>
              <p>$ {deliveryCharges.toFixed(2)}</p>
            </div>
            <hr />
            <hr />
            <div className="flex justify-between">
              <h3>Total </h3>
              <p>$ {mainTotal.toFixed(2)}</p>
            </div>
          </main>
          <div className="flex justify-between gap-10 mt-10">
            <button
              className=" bg-green-lemon text-white px-10 py-2 rounded-2xl my-5  active:scale-95"
              onClick={clearOrders}
            >
              Clear Orders
            </button>
            <button className=" bg-yellow-lemon px-10 py-2 rounded-2xl my-5 active:scale-95">
              Order Delivery
            </button>
          </div>
        </>
      ) : (
        <p>You have no orders!</p>
      )}
    </div>
  )
}

export default OrderList
