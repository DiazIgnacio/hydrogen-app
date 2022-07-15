import React from 'react'
import Button from '../Button/index'
import MenuButton2 from '../MenuButton2/index'
import EcommerceItemDesktop from '../EcommerceItemDesktop/index'
import Rating from '../Rating/index'

import AddToCartButton from '../AddToCartButton/index.client'

import './ProductsPageMobile.css'

import { ProductOptionsProvider } from '@shopify/hydrogen/client'

function ProductsPageMobile(props) {
  const {
    ecommerceItemDesktop1Props,
    ecommerceItemDesktop2Props,
    ratingProps,
    products
  } = props

  return (
    <div className="container-center-horizontal">
      <div className="products-page-mobile screen">
        <div className="navbar-2">
          <Button />
          <MenuButton2 />
        </div>
        <EcommerceItemDesktop
          image={products[0].imageSrc}
          desc={products[0].title}
          price={products[0].price}
          additional={products[0].description}
          className={ecommerceItemDesktop1Props.className}
          product={products[0]}
          AddToCartButton={AddToCartButton}
        />
        <EcommerceItemDesktop
          image={products[1].imageSrc}
          desc={products[1].title}
          price={products[1].price}
          additional={products[1].description}
          className={ecommerceItemDesktop2Props.className}
          product={products[1]}
          AddToCartButton={AddToCartButton}
        />
        <div className="ecommerce-item-desktop-4">
          <ProductOptionsProvider data={products[2]}>
            <div className="overlap-group-5">
              <img className="image-6" src={products[2].imageSrc} />
              <p className="desc-5 inter-normal-eerie-black-16px">
                {products[2].title}
              </p>
              <div className="price-5 valign-text-middle inter-bold-black-24px">
                {products[2].price}
              </div>
              <div className="additional-7 valign-text-middle inter-normal-topaz-14px">
                {products[2].description}
              </div>
              <AddToCartButton product={products[2]} />
              <Rating className={ratingProps.className} />
            </div>
          </ProductOptionsProvider>
        </div>
      </div>
    </div>
  )
}

export default ProductsPageMobile
