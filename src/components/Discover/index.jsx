import React from 'react';
import './Discover.css';

import image from '../../assets/img/group-4@2x.svg';

function Discover(props) {
  const { className } = props;

  return (
    <div className={`discover ${className || ''}`}>
      <div className='discover-1'>
        <img className='group-6' src={image} />
      </div>
    </div>
  );
}

export default Discover;
