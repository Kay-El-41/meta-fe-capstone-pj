import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAPI, submitAPI } from './timeAPI'
import {
  validateDate,
  validateEmail,
  validateName,
  validatePhone,
} from './formValidators'

const ReservationForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // some of them are set to true, so that error message won't show at the start.
    name: true,
    mail: true,
    phone: true,
    terms: true,
    // date is set to false, since it doesn't have any error message to show.
    date: false,
  })

  const occasion = useRef()
  const diners = useRef()
  const tableLocation = useRef()
  const time = useRef()

  const [date, setDate] = useState('')
  const [availableTimes, setAvailableTimes] = useState([])

  const [buttonDisabled, setButtonDisabled] = useState(true)

  // get times
  useEffect(() => {
    if (validateDate(date)) {
      setAvailableTimes(fetchAPI(date))
      setFormData({
        ...formData,
        date: date,
      })
    } else {
      setAvailableTimes(['Please Select Within Two Months From Today.'])
    }
  }, [date])

  useEffect(() => {
    for (let key in formData) {
      if (typeof formData[key] == 'boolean') {
        setButtonDisabled(true)
        break
      } else {
        setButtonDisabled(false)
      }
    }
  }, [formData])

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      ...formData,
      occasion: occasion.current.value,
      diners: diners.current.value,
      tableLocation: tableLocation.current.value,
      time: time.current.value,
    }
    if (submitAPI(data)) {
      navigate('/reservation/complete', { state: { ...data } })
    }
  }

  const nameChange = (e) => {
    validateName(e.target.value)
      ? setFormData({
          ...formData,
          name: e.target.value,
        })
      : setFormData({
          ...formData,
          name: false,
        })
  }

  const mailChange = (e) => {
    validateEmail(e.target.value)
      ? setFormData({
          ...formData,
          mail: e.target.value,
        })
      : setFormData({
          ...formData,
          mail: false,
        })
  }

  const phoneChange = (e) => {
    validatePhone(e.target.value)
      ? setFormData({
          ...formData,
          phone: e.target.value,
        })
      : setFormData({
          ...formData,
          phone: false,
        })
  }

  const termsChange = (e) => {
    e.target.value == 'yes'
      ? setFormData({
          ...formData,
          terms: e.target.value,
        })
      : setFormData({
          ...formData,
          terms: false,
        })
  }

  return (
    <div className="font-karla flex flex-col">
      <h2 className="font-markazi text-4xl my-5">Reserve a Table</h2>
      <form action="#" className="flex flex-col gap-5">
        <div className="user-info">
          <div className="flex flex-col">
            <label htmlFor="name">Enter Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className=" border-2 outline-none p-2"
              required
              onChange={nameChange}
            />
            <p className={`${formData.name && 'hidden'} text-red-500 text-sm`}>
              Name must be longer than 3 and less than 20*
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="johndoe@mail.com"
              className=" border-2 outline-none p-2"
              required
              onChange={mailChange}
            />
            <p className={`${formData.mail && 'hidden'} text-red-500 text-sm`}>
              Please enter valid email including @*
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="+959401326062"
              className=" border-2 outline-none p-2"
              required
              onChange={phoneChange}
            />
            <p className={`${formData.phone && 'hidden'} text-red-500 text-sm`}>
              Please enter valid phone number*
            </p>
          </div>
        </div>

        <div className="occasion-diners-table flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/3">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              id="occasion"
              className=" border-2 outline-none p-2"
              ref={occasion}
              defaultValue="Casual"
            >
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday">Birthday</option>
              <option value="Casual">Casual</option>
              <option value="Propose">Propose</option>
            </select>
          </div>

          <div className="flex flex-col md:w-1/3">
            <label htmlFor="diners">Number of Diners</label>
            <select
              name="diners"
              id="diners"
              className=" border-2 outline-none p-2"
              ref={diners}
              defaultValue="2"
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </div>

          <div className="flex flex-col md:w-1/3">
            <label htmlFor="table">Table Location</label>
            <select
              name="table"
              id="table"
              placeholder="Enter Mail"
              className=" border-2 outline-none p-2"
              defaultValue="Any"
              ref={tableLocation}
            >
              <option value="Any">Any</option>
              <option value="Inside">Inside</option>
              <option value="Outside">Outside</option>
              <option value="Window">Window</option>
            </select>
          </div>
        </div>

        <div className="date-and-time flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="dineDate">Number of Diners</label>
            <input
              type="date"
              name="date"
              id="dineDate"
              className=" border-2 outline-none p-2"
              required
              onChange={(e) => {
                setDate(e.target.value)
              }}
            />
          </div>

          <div className="flex flex-col md:w-1/2">
            <label htmlFor="dineTime">Time</label>
            <select
              name="time"
              id="dineTime"
              className=" border-2 outline-none p-2"
              required
              ref={time}
            >
              {date ? (
                availableTimes.map((time) => {
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  )
                })
              ) : (
                <option>Please Choose Date First.</option>
              )}
            </select>
          </div>
        </div>

        <div className="terms" onChange={termsChange}>
          <p>
            Please note that if you are late than 45 minutes, the reservation
            will be cancelled automatically.
          </p>
          <input type="radio" id="yes" name="term" value="yes" required />
          <label htmlFor="yes">&nbsp; I accept the terms.</label> <br />
          <input type="radio" id="no" name="term" value="no" />
          <label htmlFor="no">&nbsp; I don't accept the terms.</label>
          <p className={`${formData.terms && 'hidden'} text-red-500 text-sm`}>
            You need to accept our terms before reserving.*
          </p>
        </div>

        <button
          className=" bg-yellow-lemon px-4 py-2 rounded-2xl mt-5 my-10 disabled:bg-gray-lemon  active:scale-95"
          onClick={submitHandler}
          disabled={buttonDisabled && true}
        >
          Reserve
        </button>
      </form>
    </div>
  )
}

export default ReservationForm
