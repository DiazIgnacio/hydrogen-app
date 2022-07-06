import React from 'react';
import HomeButton2 from '../HomeButton2';
import Button2 from '../Button2';
import Button3 from '../Button3';
import AddButton3 from '../AddButton3';
import SubstractButton3 from '../SubstractButton3';
import RemoveButton3 from '../RemoveButton3';
import PaymentSystemsRadioButton from '../PaymentSystemsRadioButton';
import ApplePay from '../ApplePay';
import GooglePay from '../GooglePay';
import PayPal from '../PayPal';
import CreditCardRadioButton from '../CreditCardRadioButton';
import Maestro from '../Maestro';
import Discover from '../Discover';
import PayButton from '../PayButton';

import imageMasterCard from 'assets/img/mastercard@2x.svg';

import './CartPageTablet.css';

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
    googlePayProps,
  } = props;

  return (
    <div className='container-center-horizontal'>
      <div className='cart-page-tablet screen'>
        <div className='navbar-5'>
          <HomeButton2 />
          <Button2 />
          <Button3 />
        </div>
        <div className='my-cart valign-text-middle poppins-medium-black-72px'>
          {myCart}
        </div>
        <div className='ecommerce-item'>
          <div className='flex-col-1'>
            <div className='flex-row-1'>
              <img className='image-14' src={image1} />
              <div className='desc-10 inter-normal-eerie-black-20px'>
                {desc1}
              </div>
            </div>
            <div className='flex-row'>
              <AddButton3 />
              <div className='quantity valign-text-middle poppins-normal-black-38px'>
                {quantity1}
              </div>
              <SubstractButton3 />
              <RemoveButton3 />
              <div className='price-10 valign-text-middle inter-bold-black-24px'>
                {price1}
              </div>
            </div>
          </div>
        </div>
        <div className='ecommerce-item-1'>
          <div className='flex-row-2'>
            <img className='image-13' src={image2} />
            <div className='desc-11 inter-normal-eerie-black-20px'>{desc2}</div>
          </div>
          <div className='flex-row-3'>
            <AddButton3 />
            <div className='quantity valign-text-middle poppins-normal-black-38px'>
              {quantity2}
            </div>
            <SubstractButton3 />
            <RemoveButton3 />
            <div className='price-11 valign-text-middle inter-bold-black-24px'>
              {price2}
            </div>
          </div>
        </div>
        <div className='ecommerce-item-2'>
          <div className='flex-col-2'>
            <div className='flex-row-4'>
              <img className='image-13' src={image3} />
              <div className='desc-12 inter-normal-eerie-black-20px'>
                {desc3}
              </div>
            </div>
            <div className='flex-row'>
              <AddButton3 />
              <div className='quantity valign-text-middle poppins-normal-black-38px'>
                {quantity3}
              </div>
              <SubstractButton3 />
              <RemoveButton3 className={removeButton3Props.className} />
              <div className='price-12 valign-text-middle inter-bold-black-24px'>
                {price3}
              </div>
            </div>
          </div>
        </div>
        <div className='total-card'>
          <div className='total-35699 valign-text-middle poppins-medium-black-26px'>
            {total35699}
          </div>
        </div>
        <div className='flex-row-5'>
          <div className='payment-systems'>
            <PaymentSystemsRadioButton />
            <div className='flex-row-6'>
              <ApplePay />
              <GooglePay />
              <PayPal />
            </div>
          </div>
          <div className='credit-card'>
            <div className='overlap-group-10'>
              <CreditCardRadioButton />
              <div className='flex-row-7'>
                <img className='master-card' src={imageMasterCard} />
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
  );
}

export default CartPageTablet;
