import React from 'react'
import CTAButton from './CTAButton'
import SpecialCard from './SpecialCard'

const WeeklySection = () => {
  const menu = [
    {
      img: 'greek salad.jpg',
      name: 'Greek Salad',
      price: '12.99',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croûtons.',
    },
    {
      img: 'bruchetta.svg',
      name: 'Bruchetta',
      price: '5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
    },
    {
      img: 'lemon dessert.jpg',
      name: 'Lemon Dessert',
      price: '5.00',
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ]

  return (
    <section className='weekly-section'>
      <header>
        <h2>This Weeks Specials</h2>
        <CTAButton text="Online Menu" />
      </header>
      <main>
        {menu.map((item) => {
          return <SpecialCard {...item} key={item.name} />
        })}
      </main>
    </section>
  )
}

export default WeeklySection
