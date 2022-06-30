import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./RemoveButton3.css";

function RemoveButton3(props) {
  const { className } = props;

  return (
    <div className={`remove-button ${className || ""}`}>
      <MuiMaterial.Button
        endIcon=""
        startIcon=""
        size="medium"
        color="warning"
        disabled={false}
        variant="outlined"
        disableElevation={false}
      >
        Remove
      </MuiMaterial.Button>
    </div>
  );
}

export default RemoveButton3;
