import './App.css'
import BookingPage from './Components/BookingPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  )
}

export default App
