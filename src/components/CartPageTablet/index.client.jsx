import React from 'react'
import HomeButton2 from '../HomeButton2/index'
import Button2 from '../Button2/index'
import Button3 from '../Button3/index'
import AddButton3 from '../AddButton3/index'
import SubstractButton3 from '../SubstractButton3/index'
import RemoveButton3 from '../RemoveButton3/index'
import PaymentSystemsRadioButton from '../PaymentSystemsRadioButton/index'
import ApplePay from '../ApplePay/index'
import GooglePay from '../GooglePay/index'
import PayPal from '../PayPal/index'
import CreditCardRadioButton from '../CreditCardRadioButton/index'
import Maestro from '../Maestro/index'
import Discover from '../Discover/index'
import PayButton from '../PayButton/index'

import { useCart } from '@shopify/hydrogen/client'

import imageMasterCard from '../../assets/img/mastercard@2x.svg'

import './CartPageTablet.css'

function CartPageTablet(props) {
  const {
    myCart,
    image1,
    desc1,
    quantity1,
    price1,
    image2,
    desc2,
    quantity2,
    price2,
    image3,
    desc3,
    quantity3,
    price3,
    total35699,
    removeButton3Props,
    googlePayProps
  } = props

  const { totalQuantity, lines, cost } = useCart()
  lines ? console.log(lines) : console.log('no lines')
  cost && console.log(cost)

  const ProductCard = ({ merchandise, quantity, cost }) => {
    return (
      <div className="ecommerce-item">
        <div className="flex-col-1">
          <div className="flex-row-1">
            <img className="image-14" src={merchandise.image.url} />
            <div className="desc-10 inter-normal-eerie-black-20px">
              {merchandise.product.title}
            </div>
          </div>
          <div className="flex-row">
            <AddButton3 />
            <div className="quantity valign-text-middle poppins-normal-black-38px">
              {quantity}
            </div>
            <SubstractButton3 />
            <RemoveButton3 />
            <div className="price-10 valign-text-middle inter-bold-black-24px">
              {`${cost.totalAmount.amount} ${cost.totalAmount.currencyCode}`}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-center-horizontal">
      <div className="cart-page-tablet screen">
        <div className="navbar-5">
          <HomeButton2 />
          <Button2 />
          <Button3 />
        </div>
        <div className="my-cart valign-text-middle poppins-medium-black-72px">
          {myCart}
        </div>
        {lines !== [] &&
          lines.map(({ cost, merchandise, quantity, id }) => (
            <ProductCard
              key={id}
              cost={cost}
              merchandise={merchandise}
              quantity={quantity}
            />
          ))}
        <div className="total-card">
          <div className="total-35699 valign-text-middle poppins-medium-black-26px pb-3">
            {cost &&
              `${cost.totalAmount.amount} ${cost.totalAmount.currencyCode}`}
          </div>
        </div>
        <div className="flex-row-5">
          <div className="payment-systems">
            <PaymentSystemsRadioButton />
            <div className="flex-row-6">
              <ApplePay />
              <GooglePay />
              <PayPal />
            </div>
          </div>
          <div className="credit-card">
            <div className="overlap-group-10">
              <CreditCardRadioButton />
              <div className="flex-row-7">
                <img className="master-card" src={imageMasterCard} />
                <Maestro />
                <GooglePay className={googlePayProps.className} />
                <Discover />
              </div>
            </div>
          </div>
        </div>
        <PayButton />
      </div>
    </div>
  )
}

export default CartPageTablet
