import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./HomeButton3.css";

function HomeButton3() {
  return (
    <Link to="/home-page-menu-close-mobile">
      <div className="home-button">
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
      </div>
    </Link>
  );
}

export default HomeButton3;
