import React from 'react'
import OrderNavbar from '../components/orderPage/OrderNavbar'
import ReservationForm from '../components/reservationPage/ReservationForm'

const ReservationPage = () => {
  return (
    <>
      <header>
        <OrderNavbar />
      </header>
      <main className="px-[15px] lg:px-[150px] xl:px-[250px] flex flex-col lg:gap-10">
        <img
          src="/src/assets/restaurant.jpg"
          className="rounded-xl object-cover h-[300px] mt-10"
        />
        <ReservationForm />
      </main>
    </>
  )
}

export default ReservationPage
