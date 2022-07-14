import React from 'react'
import HomeButton4 from '../HomeButton4/index'
import TextField from '../TextField/index'
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

import imageMasterCard from '../../assets/img/mastercard-1@2x.svg'

import './CartPageDesktop.css'
import { useCart } from '@shopify/hydrogen/client'

function CartPageDesktop(props) {
  const {
    myCart,
    button2Props,
    button3Props,
    addButton31Props,
    substractButton31Props,
    removeButton31Props,
    googlePayProps,
    discoverProps,
    payButtonProps
  } = props

  const { lines, cost, checkoutUrl } = useCart()

  const ProductCard = ({ merchandise, quantity, cost }) => {
    return (
      <div className="flex-col-5">
        <div className="flex-row-8">
          <img className="image-15" src={merchandise.image.url} />
          <div className="desc-13 inter-normal-eerie-black-20px">
            {merchandise.product.title}
          </div>
        </div>
        <div className="flex-row-9">
          <AddButton3 className={addButton31Props.className} />
          <div className="quantity-1 valign-text-middle poppins-normal-black-38px">
            {quantity}
          </div>
          <SubstractButton3 className={substractButton31Props.className} />
          <RemoveButton3 className={removeButton31Props.className} />
          <div className="price-13 valign-text-middle inter-bold-black-24px">
            {`${cost.totalAmount.amount} ${cost.totalAmount.currencyCode}`}
          </div>
        </div>
      </div>
    )
  }

  const onPayHandler = () => {
    window.open(
      checkoutUrl,
      '_blank' // <- This is what makes it open in a new window.
    )
  }

  return (
    <div className="container-center-horizontal">
      <div className="cart-page-desktop screen">
        <div className="navbar-6">
          <HomeButton4 />
          <TextField />
          <Button2 className={button2Props.className} />
          <Button3 className={button3Props.className} />
        </div>
        <div className="flex-row-10">
          <div className="flex-col-4">
            <div className="my-cart-1 valign-text-middle poppins-medium-black-72px">
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
            <div className="overlap-group3-3">
              <div className="total-35699-1 valign-text-middle poppins-medium-black-26px">
                {cost &&
                  `${cost.totalAmount.amount} ${cost.totalAmount.currencyCode}`}
              </div>
            </div>
          </div>
          <div className="flex-col-8">
            <div className="radio-group">
              <div className="payment-systems-option">
                <PaymentSystemsRadioButton />
                <div className="flex-row-13">
                  <ApplePay />
                  <GooglePay />
                  <PayPal />
                </div>
              </div>
              <div className="credit-card-option">
                <CreditCardRadioButton />
                <div className="flex-row-14">
                  <img className="master-card-1" src={imageMasterCard} />
                  <Maestro />
                  <GooglePay className={googlePayProps.className} />
                  <Discover className={discoverProps.className} />
                </div>
              </div>
            </div>
            <PayButton
              className={payButtonProps.className}
              onClick={onPayHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPageDesktop
