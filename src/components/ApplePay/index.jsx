import React from 'react';
import './ApplePay.css';
import image from 'assets/img/path@2x.svg';

function ApplePay() {
  return (
    <div className='apple-pay'>
      <div className='apple-pay-1'>
        <img className='path' src={image} />
      </div>
    </div>
  );
}

export default ApplePay;
