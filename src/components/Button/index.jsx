import React, { useEffect } from 'react'
import * as MuiMaterial from '@mui/material'
import * as EmotionReact from '@emotion/react'
import * as EmotionStyled from '@emotion/styled'
import * as MuiIconsMaterial from '@mui/icons-material'
import { Link } from '@shopify/hydrogen'
import './Button.css'

function Button() {
  return (
    <div className="home-button">
      <Link to="/">
        <MuiMaterial.Button
          endIcon=""
          size="large"
          variant="text"
          color="primary"
          disabled={false}
          disableElevation={false}
          startIcon={<MuiIconsMaterial.AddBusinessTwoTone />}
        >
          My Logo
        </MuiMaterial.Button>
      </Link>
    </div>
  )
}

export default Button
