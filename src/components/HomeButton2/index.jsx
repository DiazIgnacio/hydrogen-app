import React, { useEffect } from "react";
import { Link } from "@shopify/hydrogen";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./HomeButton2.css";

function HomeButton2() {
  return (
    <Link to="/home-page-tablet">
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

export default HomeButton2;
