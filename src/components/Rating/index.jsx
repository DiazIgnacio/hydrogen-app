import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Rating.css";

function Rating(props) {
  const { className } = props;

  return (
    <div className={`rating-14 ${className || ""}`}>
      <MuiMaterial.Rating max={5} size="medium" precision={0.5} defaultValue={3} disabled={false} />
    </div>
  );
}

export default Rating;
