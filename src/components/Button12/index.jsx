import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Button12.css";

function Button12() {
  return (
    <div className="link">
      <MuiMaterial.Button
        endIcon=""
        size="medium"
        variant="text"
        color="primary"
        disabled={false}
        disableElevation={false}
        startIcon={<MuiIconsMaterial.Kitchen />}
      >
        Kitchen Accessories
      </MuiMaterial.Button>
    </div>
  );
}

export default Button12;
