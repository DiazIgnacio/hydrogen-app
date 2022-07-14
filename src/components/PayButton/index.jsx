import React, { useEffect } from 'react'
import * as MuiMaterial from '@mui/material'
import * as EmotionReact from '@emotion/react'
import * as EmotionStyled from '@emotion/styled'
import * as MuiIconsMaterial from '@mui/icons-material'
import './PayButton.css'

function PayButton(props) {
  const { className, onClick } = props

  return (
    <div className={`pay-button ${className || ''}`}>
      <MuiMaterial.Button
        endIcon=""
        size="large"
        startIcon=""
        color="primary"
        disabled={false}
        variant="contained"
        disableElevation={false}
        onClick={onClick}
      >
        Pay
      </MuiMaterial.Button>
    </div>
  )
}

export default PayButton
