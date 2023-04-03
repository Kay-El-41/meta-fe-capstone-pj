import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import CartPage from './routes/CartPage'
import ReservationPage from './routes/ReservationPage'
import ReservationSuccess from './components/reservationPage/ReservationSuccess'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/order" element={<CartPage />}></Route>
        <Route path="/reservation" element={<ReservationPage />}></Route>
        <Route
          path="/reservation/complete"
          element={<ReservationSuccess />}
        ></Route>
      </Routes>
    </>
  )
}

export default App
