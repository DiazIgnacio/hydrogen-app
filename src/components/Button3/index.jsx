import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Button3.css";

function Button3(props) {
  const { className } = props;

  return (
    <div className={`cart-button ${className || ""}`}>
      <MuiMaterial.Button
        endIcon=""
        size="medium"
        color="primary"
        disabled={false}
        variant="outlined"
        disableElevation={false}
        startIcon={<MuiIconsMaterial.ShoppingCart />}
      >
        My Cart
      </MuiMaterial.Button>
    </div>
  );
}

export default Button3;
