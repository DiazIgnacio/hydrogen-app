import React from 'react'
import Button from '../Button/index'
import TextField from '../TextField/index'
import ProductsButton from '../ProductsButton/index'
import CartButton from '../CartButton/index'
import Rating from '../Rating/index'
import './HomePageDesktop.css'

import overlapGroup from '../../assets/img/rectangle-1@1x.png'

function HomePageDesktop(props) {
  const { place, topProducts, ratingProps, products } = props

  return (
    <div className="container-center-horizontal">
      <div className="home-page-desktop screen">
        <div className="overlap-group5">
          <div
            className="overlap-group-1"
            style={{ backgroundImage: `url(${overlapGroup})` }}
          >
            <h1 className="place valign-text-middle">{place}</h1>
          </div>
          <div className="navbar">
            <Button />
            <TextField />
            <ProductsButton />
            <CartButton />
          </div>
        </div>
        <div className="top-products valign-text-middle poppins-medium-black-72px">
          {topProducts}
        </div>
        <div className="products">
          <div className="overlap-group3">
            <img className="image" src={products[0].imageSrc} />
            <p className="desc inter-normal-eerie-black-16px">
              {products[0].title}
            </p>
            <div className="price valign-text-middle inter-bold-black-24px">
              $ {products[0].price}
            </div>
            <p className="additional valign-text-middle inter-normal-topaz-14px">
              {products[0].description}
            </p>
            <Rating />
          </div>

          <div className="overlap-group2">
            <img className="image-1" src={products[1].imageSrc} />
            <p className="desc-1 inter-normal-eerie-black-16px">
              {products[1].title}
            </p>
            <div className="price-1 valign-text-middle inter-bold-black-24px">
              $ {products[1].price}
            </div>
            <p className="additional-1 valign-text-middle inter-normal-topaz-14px">
              <span>
                <span className="span0 inter-normal-topaz-14px">
                  {products[1].description}
                </span>
              </span>
            </p>
            <Rating />
          </div>

          <div className="overlap-group">
            <img className="image" src={products[2].imageSrc} />
            <p className="desc inter-normal-eerie-black-16px">
              {products[2].title}
            </p>
            <div className="price valign-text-middle inter-bold-black-24px">
              $ {products[2].price}
            </div>
            <div className="additional-2 valign-text-middle inter-normal-topaz-14px">
              {products[2].description}
            </div>
            <Rating className={ratingProps.className} />
          </div>

          <div className="overlap-group-2">
            <img className="image-2" src={products[3].imageSrc} />
            <p className="desc-1 inter-normal-eerie-black-16px">
              {products[3].title}
            </p>
            <div className="price-1 valign-text-middle inter-bold-black-24px">
              $ {products[3].price}
            </div>
            <p className="additional-3 valign-text-middle inter-normal-topaz-14px">
              {products[3].description}
            </p>
            <Rating />
          </div>

          <div className="overlap-group">
            <img className="image" src={products[4].imageSrc} />
            <p className="desc inter-normal-eerie-black-16px">
              {products[4].title}
            </p>
            <div className="price valign-text-middle inter-bold-black-24px">
              $ {products[4].price}
            </div>
            <p className="additional valign-text-middle inter-normal-topaz-14px">
              {products[4].description}
            </p>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageDesktop
