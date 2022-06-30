import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./MenuButton2.css";

function MenuButton2() {
  return (
    <Link to="/navbar-open">
      <div className="menu-button">
        <MuiMaterial.Button
          endIcon=""
          size="medium"
          variant="text"
          color="primary"
          disabled={false}
          disableElevation={false}
          startIcon={<MuiIconsMaterial.Menu />}
        ></MuiMaterial.Button>
      </div>
    </Link>
  );
}

export default MenuButton2;
