import salad from '/src/assets/greek salad.jpg'
import bruschetta from '/src/assets/bruschetta.svg'
import lemon_dessert from '/src/assets/lemon dessert.jpg'

const onlineMenu = [
  {
    image: salad,
    id: 1,
    name: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croûtons.',
  },
  {
    image: bruschetta,
    id: 2,
    name: 'Bruschetta',
    price: 5.99,
    description:
      'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    image: lemon_dessert,
    id: 3,
    name: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has sourced and is as authentic as can be imagined.",
  },
]
const testimonials = [
  {
    rating: '3.5 Stars',
    text: 'I ordered the food , it arrived just in time for my birthday!',
    person: 'Kayden Anderson',
    img: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    rating: '4.5 Stars',
    text: 'These food are absolute my favorite things to give as a gifts!',
    person: 'Kinsley Sanchez',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    rating: '4 Stars',
    text: 'Would definitely recommend Little Lemon Restaurant and will definitely be ordering again.',
    person: 'Leonardo Thompson',
    img: 'https://randomuser.me/api/portraits/men/72.jpg',
  },
  {
    rating: '5 Stars',
    text: 'I can always find something at Little Lemon Restaurant that I fall in love with instantly',
    person: 'Sarah Gonzalez',
    img: 'https://randomuser.me/api/portraits/women/70.jpg',
  },
]
export { onlineMenu, testimonials }
