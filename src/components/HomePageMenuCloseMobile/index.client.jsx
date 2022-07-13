import React from 'react'
import Button from '../Button/index'
import MenuButton from '../MenuButton/index'
import EcommerceItemDesktop from '../EcommerceItemDesktop/index'
import Rating from '../Rating/index'
import './HomePageMenuCloseMobile.css'

import heroBg from '../../assets/img/rectangle-1@1x.png'

function HomePageMenuCloseMobile(props) {
  const { place, topProducts, products } = props

  return (
    <div className="container-center-horizontal">
      <div className="home-page-menu-close-mobile screen">
        <div className="navbar-1">
          <Button />
          <MenuButton />
        </div>
        <div className="hero">
          <div className="overlap-group-3">
            <img className="hero-bg" src={heroBg} />
            <div className="place-1 valign-text-middle">{place}</div>
          </div>
        </div>
        <div className="top-products-1 valign-text-middle">{topProducts}</div>
        <EcommerceItemDesktop
          image={products[0].imageSrc}
          desc={products[0].description}
          price={products[0].price}
          additional={products[0].title}
        />
        <div className="ecommerce-item-desktop">
          <div className="overlap-group1">
            <img className="image-3" src={products[1].imageSrc} />
            <p className="desc-2 inter-normal-eerie-black-16px">
              {products[1].title}
            </p>
            <div className="price-2 valign-text-middle inter-bold-black-24px">
              {products[1].price}
            </div>
            <p className="additional-4 valign-text-middle inter-normal-topaz-14px">
              {products[1].description}
            </p>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageMenuCloseMobile
