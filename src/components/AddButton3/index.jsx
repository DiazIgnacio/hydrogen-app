import React, { useEffect } from 'react'
import * as MuiMaterial from '@mui/material'
import * as EmotionReact from '@emotion/react'
import * as EmotionStyled from '@emotion/styled'
import * as MuiIconsMaterial from '@mui/icons-material'
import './AddButton3.css'

function AddButton3({ className, ...props }) {
  return (
    <div className={`add-button ${className || ''}`}>
      <MuiMaterial.Fab
        size="medium"
        color="success"
        disabled={false}
        variant="circular"
        disableRipple={false}
        {...props}
      >
        <MuiIconsMaterial.AddOutlined />
      </MuiMaterial.Fab>
    </div>
  )
}

export default AddButton3
