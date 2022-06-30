import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./SubstractButton3.css";

function SubstractButton3(props) {
  const { className } = props;

  return (
    <div className={`substract-button ${className || ""}`}>
      <MuiMaterial.Fab color="error" size="medium" disabled={false} variant="circular" disableRipple={false}>
        <MuiIconsMaterial.Remove />
      </MuiMaterial.Fab>
    </div>
  );
}

export default SubstractButton3;
