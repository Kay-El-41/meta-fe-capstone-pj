import React from 'react'
import OrderNavbar from '../components/orderPage/OrderNavbar'
import OrderList from '../components/orderPage/OrderList'

const CartPage = () => {
  return (
    <>
      <header>
        <OrderNavbar />
      </header>
      <main>
        <OrderList />
      </main>
    </>
  )
}

export default CartPage
