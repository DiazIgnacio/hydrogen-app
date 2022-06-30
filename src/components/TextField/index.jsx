import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./TextField.css";

function TextField() {
  return (
    <div className="search">
      <MuiMaterial.TextField
        size="medium"
        label="Search"
        color="primary"
        disabled={false}
        variant="outlined"
        sx={{ width: "500px" }}
      />
    </div>
  );
}

export default TextField;
