import React from 'react'
import Button from '../Button/index'
import Button2 from '../Button2/index'
import CartButton3 from '../CartButton3/index'
import Rating from '../Rating/index'
import Left from '../Left/index'
import './ProductsPageTablet.css'

import {
  AddToCartButton,
  ProductOptionsProvider
} from '@shopify/hydrogen/client'

function ProductsPageTablet(props) {
  const { products } = props

  const Product = product => (
    <ProductOptionsProvider data={product}>
      <img className="image-10" src={product.imageSrc} />
      <p className="desc-8 inter-normal-eerie-black-16px">{product.title}</p>
      <div className="price-8 valign-text-middle inter-bold-black-24px">
        {product.price}
      </div>
      <p className="additional-12 valign-text-middle inter-normal-topaz-14px">
        {product.description}
      </p>
      <AddToCart product={product} />
      <Rating />
    </ProductOptionsProvider>
  )

  const AddToCart = ({ product }) => (
    <AddToCartButton
      variantId={product.variantId}
      quantity={1}
      accessibleAddingToCartLabel="Adding item to your cart"
    >
      Add to Cart
    </AddToCartButton>
  )

  return (
    <div className="container-center-horizontal">
      <div className="products-page-tablet screen">
        <div className="navbar-4">
          <Button />
          <Button2 />
          <CartButton3 />
        </div>
        <div className="overlap-group5-1">
          <div className="right">
            <div className="overlap-group-container-2">
              <div className="overlap-group4-1">
                <Product {...products[0]} />
              </div>
              <div className="overlap-group-8">
                <Product {...products[1]} />
              </div>
              <div className="overlap-group-8">
                <Product {...products[2]} />
              </div>
            </div>
            <div className="flex-col">
              <div className="overlap-group3-2">
                <Product {...products[3]} />
              </div>
              <div className="ecommerce-item-desktop-5">
                <Product {...products[4]} />
              </div>
              <div className="overlap-group-9">
                <Product {...products[5]} />
              </div>
            </div>
          </div>
          <Left />
        </div>
      </div>
    </div>
  )
}

export default ProductsPageTablet
