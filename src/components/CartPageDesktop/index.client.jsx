import React from 'react';
import HomeButton4 from '../HomeButton4/index';
import TextField from '../TextField/index';
import Button2 from '../Button2/index';
import Button3 from '../Button3/index';
import AddButton3 from '../AddButton3/index';
import SubstractButton3 from '../SubstractButton3/index';
import RemoveButton3 from '../RemoveButton3/index';
import PaymentSystemsRadioButton from '../PaymentSystemsRadioButton/index';
import ApplePay from '../ApplePay/index';
import GooglePay from '../GooglePay/index';
import PayPal from '../PayPal/index';
import CreditCardRadioButton from '../CreditCardRadioButton/index';
import Maestro from '../Maestro/index';
import Discover from '../Discover/index';
import PayButton from '../PayButton/index';

import imageMasterCard from '../../assets/img/mastercard-1@2x.svg';

import './CartPageDesktop.css';

function CartPageDesktop(props) {
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
    button2Props,
    button3Props,
    addButton31Props,
    substractButton31Props,
    removeButton31Props,
    addButton32Props,
    substractButton32Props,
    removeButton32Props,
    addButton33Props,
    substractButton33Props,
    removeButton33Props,
    googlePayProps,
    discoverProps,
    payButtonProps,
  } = props;

  return (
    <div className='container-center-horizontal'>
      <div className='cart-page-desktop screen'>
        <div className='navbar-6'>
          <HomeButton4 />
          <TextField />
          <Button2 className={button2Props.className} />
          <Button3 className={button3Props.className} />
        </div>
        <div className='flex-row-10'>
          <div className='flex-col-4'>
            <div className='my-cart-1 valign-text-middle poppins-medium-black-72px'>
              {myCart}
            </div>
            <div className='flex-col-5'>
              <div className='flex-row-8'>
                <img className='image-15' src={image1} />
                <div className='desc-13 inter-normal-eerie-black-20px'>
                  {desc1}
                </div>
              </div>
              <div className='flex-row-9'>
                <AddButton3 className={addButton31Props.className} />
                <div className='quantity-1 valign-text-middle poppins-normal-black-38px'>
                  {quantity1}
                </div>
                <SubstractButton3
                  className={substractButton31Props.className}
                />
                <RemoveButton3 className={removeButton31Props.className} />
                <div className='price-13 valign-text-middle inter-bold-black-24px'>
                  {price1}
                </div>
              </div>
            </div>
            <div className='flex-col-6'>
              <div className='flex-row-8'>
                <img className='image-16' src={image2} />
                <div className='desc-14 inter-normal-eerie-black-20px'>
                  {desc2}
                </div>
              </div>
              <div className='flex-row-11'>
                <AddButton3 className={addButton32Props.className} />
                <div className='quantity-1 valign-text-middle poppins-normal-black-38px'>
                  {quantity2}
                </div>
                <SubstractButton3
                  className={substractButton32Props.className}
                />
                <RemoveButton3 className={removeButton32Props.className} />
                <div className='price-14 valign-text-middle inter-bold-black-24px'>
                  {price2}
                </div>
              </div>
            </div>
            <div className='flex-col-7'>
              <div className='flex-row-12'>
                <img className='image-15' src={image3} />
                <div className='desc-15 inter-normal-eerie-black-20px'>
                  {desc3}
                </div>
              </div>
              <div className='flex-row-9'>
                <AddButton3 className={addButton33Props.className} />
                <div className='quantity-1 valign-text-middle poppins-normal-black-38px'>
                  {quantity3}
                </div>
                <SubstractButton3
                  className={substractButton33Props.className}
                />
                <RemoveButton3 className={removeButton33Props.className} />
                <div className='price-13 valign-text-middle inter-bold-black-24px'>
                  {price3}
                </div>
              </div>
            </div>
            <div className='overlap-group3-3'>
              <div className='total-35699-1 valign-text-middle poppins-medium-black-26px'>
                {total35699}
              </div>
            </div>
          </div>
          <div className='flex-col-8'>
            <div className='radio-group'>
              <div className='payment-systems-option'>
                <PaymentSystemsRadioButton />
                <div className='flex-row-13'>
                  <ApplePay />
                  <GooglePay />
                  <PayPal />
                </div>
              </div>
              <div className='credit-card-option'>
                <CreditCardRadioButton />
                <div className='flex-row-14'>
                  <img className='master-card-1' src={imageMasterCard} />
                  <Maestro />
                  <GooglePay className={googlePayProps.className} />
                  <Discover className={discoverProps.className} />
                </div>
              </div>
            </div>
            <PayButton className={payButtonProps.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPageDesktop;
