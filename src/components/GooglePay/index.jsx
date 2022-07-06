import React from 'react';
import './GooglePay.css';

import image from 'assets/img/group@2x.svg';

function GooglePay(props) {
  const { className } = props;

  return (
    <div className={`google-pay ${className || ''}`}>
      <div className='google-pay-1'>
        <img className='group' src={image} />
      </div>
    </div>
  );
}

export default GooglePay;
