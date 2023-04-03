import React from 'react'
import OrderNavbar from '../orderPage/OrderNavbar'
import { useLocation } from 'react-router-dom'

const ReservationSuccess = () => {
  const  location  = useLocation()
  const data = location.state
  return (
    <>
      <header>
        <OrderNavbar />
      </header>
      <main className="flex flex-col justify-center items-center h-[80vh] p-[50px]">
        <h2 className=" text-4xl mb-2">Success</h2>
        <p className="text-center">
          You have successfully reserved a table at Little Lemon restaurant.
        </p>

        <div className="mt-5 text-center">
          <h3 className="text-2xl mb-2">Your Reservation</h3>
          <p>{data.name} | {data.time} | {data.date}</p>
          <p>{data.diners} People | {data.occasion} | {data.tableLocation} Table</p>
        </div>

        <p className='text-center mt-5'>Confirmation email has been sent to <strong>{data.mail}</strong>.</p>
      </main>
    </>
  )
}

export default ReservationSuccess
