import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./CloseMenuButton.css";

function CloseMenuButton() {
  return (
    <a href="javascript:history.back()">
      <div className="close-menu-button">
        <MuiMaterial.Button
          endIcon=""
          size="medium"
          variant="text"
          color="primary"
          disabled={false}
          disableElevation={false}
          startIcon={<MuiIconsMaterial.CancelRounded />}
        ></MuiMaterial.Button>
      </div>
    </a>
  );
}

export default CloseMenuButton;
