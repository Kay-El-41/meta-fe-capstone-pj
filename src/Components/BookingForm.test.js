import {render, screen} from '@testing-library/react'
import BookingForm from './BookingForm'

test('Test Rendering the Booking Form element', () => {
  render (<BookingForm/>)
  const elementName = screen.getByText("Choose date")
  expect(elementName).toBeInTheDocument()
})
