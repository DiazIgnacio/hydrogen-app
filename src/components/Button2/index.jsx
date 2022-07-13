import React, { useEffect } from 'react';
import * as MuiMaterial from '@mui/material';
import { Link } from '@shopify/hydrogen';
import * as EmotionReact from '@emotion/react';
import * as EmotionStyled from '@emotion/styled';
import * as MuiIconsMaterial from '@mui/icons-material';
import './Button2.css';

function Button2(props) {
  const { className } = props;

  return (
    <div className={`products-button ${className || ''}`}>
      <Link to='/products-page'>
        <MuiMaterial.Button
          endIcon=''
          startIcon=''
          size='medium'
          color='primary'
          disabled={false}
          variant='contained'
          disableElevation={false}
        >
          All Products
        </MuiMaterial.Button>
      </Link>
    </div>
  );
}

export default Button2;
