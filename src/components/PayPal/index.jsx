import React from 'react';
import './PayPal.css';

import image from '../../assets/img/group-1@2x.svg';

function PayPal() {
  return (
    <div className='pay-pal'>
      <div className='pay-pal-1'>
        <img className='group-1' src={image} />
      </div>
    </div>
  );
}

export default PayPal;
