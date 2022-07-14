import React from 'react'
import Rating from '../Rating'
import './EcommerceItemDesktop.css'

import { ProductOptionsProvider } from '@shopify/hydrogen/client'

function EcommerceItemDesktop(props) {
  const { image, desc, price, additional, className, product, AddToCart } =
    props

  return (
    <ProductOptionsProvider data={product ? product : {}}>
      <div className={`ecommerce-item-desktop-1 ${className || ''}`}>
        <div className="overlap-group2-1">
          <img className="image-5" src={image} />
          <p className="desc-4 inter-normal-eerie-black-16px">{desc}</p>
          <div className="price-4 valign-text-middle inter-bold-black-24px">
            {price}
          </div>
          <p className="additional-6 valign-text-middle inter-normal-topaz-14px">
            {additional}
          </p>
          {AddToCart && <AddToCart product={product} />}
          <Rating />
        </div>
      </div>
    </ProductOptionsProvider>
  )
}

export default EcommerceItemDesktop
