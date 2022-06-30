import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Button2.css";

function Button2(props) {
  const { className } = props;

  return (
    <div className={`products-button ${className || ""}`}>
      <MuiMaterial.Button
        endIcon=""
        startIcon=""
        size="medium"
        color="primary"
        disabled={false}
        variant="contained"
        disableElevation={false}
      >
        All Products
      </MuiMaterial.Button>
    </div>
  );
}

export default Button2;
