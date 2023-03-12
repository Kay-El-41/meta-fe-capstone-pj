import React from 'react'

const SpecialCard = ({ img, name, price, description }) => {

  return (
    <article>
      <img src={require(`../icons_assets/${img}`)} alt="product" />
      <div>
        <header>
          <h3>{name}</h3>
          <p>$ {price}</p>
        </header>
        <p>{description}</p>
        <div>
          <a href="#" role="button">Order a delivery</a>
          <img src={require('../icons_assets/Basket.svg')} alt="basket" />
        </div>
      </div>
    </article>
  )
}

export default SpecialCard
