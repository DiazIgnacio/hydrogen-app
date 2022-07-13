import React from 'react'
import Button from '../Button/index'
import ProductsButton2 from '../ProductsButton2/index'
import CartButton2 from '../CartButton2/index'
import Rating from '../Rating/index'
import './HomePageTablet.css'

import overlapGroup from '../../assets/img/rectangle-1@1x.png'

function HomePageTablet(props) {
  const { place, topProducts, ratingProps, products } = props

  return (
    <div className="container-center-horizontal">
      <div className="home-page-tablet screen">
        <div className="overlap-group7">
          <div
            className="overlap-group-6"
            style={{ backgroundImage: `url(${overlapGroup})` }}
          >
            <div className="place-2 valign-text-middle">{place}</div>
          </div>
          <div className="navbar-3">
            <Button />
            <ProductsButton2 />
            <CartButton2 />
          </div>
        </div>
        <div className="top-products-2 valign-text-middle">{topProducts}</div>
        <div className="products-1">
          <div className="overlap-group-container">
            <div className="overlap-group-7">
              <img className="image-8" src={products[0].imageSrc} />
              <p className="desc-6 inter-normal-eerie-black-16px">
                {products[0].title}
              </p>
              <div className="price-6 valign-text-middle inter-bold-black-24px">
                {products[0].price}
              </div>
              <p className="additional-9 valign-text-middle inter-normal-topaz-14px">
                {products[0].description}
              </p>
              <Rating />
            </div>
            <div className="overlap-group3-1">
              <img className="image-7" src={products[1].imageSrc} />
              <p className="desc-7 inter-normal-eerie-black-16px">
                {products[1].title}
              </p>
              <div className="price-7 valign-text-middle inter-bold-black-24px">
                {products[1].price}
              </div>
              <p className="additional-8 valign-text-middle inter-normal-topaz-14px">
                {products[1].description}
              </p>
              <Rating />
            </div>
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group2-2">
              <img className="image-9" src={products[2].imageSrc} />
              <p className="desc-6 inter-normal-eerie-black-16px">
                {products[2].title}
              </p>
              <div className="price-6 valign-text-middle inter-bold-black-24px">
                {products[2].price}
              </div>
              <p className="additional-10 valign-text-middle inter-normal-topaz-14px">
                {products[2].description}
              </p>
              <Rating />
            </div>
            <div className="overlap-group4">
              <img className="image-7" src={products[3].imageSrc} />
              <p className="desc-7 inter-normal-eerie-black-16px">
                {products[3].title}
              </p>
              <div className="price-7 valign-text-middle inter-bold-black-24px">
                {products[3].price}
              </div>
              <p className="additional-8 valign-text-middle inter-normal-topaz-14px">
                {products[3].description}
              </p>
              <Rating />
            </div>
          </div>
          <div className="overlap-group1-1">
            <img className="image-7" src={products[4].imageSrc} />
            <p className="desc-7 inter-normal-eerie-black-16px">
              {products[4].title}
            </p>
            <div className="price-7 valign-text-middle inter-bold-black-24px">
              {products[4].price}
            </div>
            <div className="additional-11 valign-text-middle inter-normal-topaz-14px">
              {products[4].description}
            </div>
            <Rating className={ratingProps.className} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageTablet
