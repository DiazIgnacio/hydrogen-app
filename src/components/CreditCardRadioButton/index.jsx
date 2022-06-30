import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./CreditCardRadioButton.css";

function CreditCardRadioButton() {
  return (
    <div className="credit-card-radio-button">
      <MuiMaterial.FormControlLabel
        label="Pay by Credit Card"
        control={
          <MuiMaterial.Radio
            size="medium"
            color="primary"
            checked={false}
            disabled={false}
            checkedIcon={<MuiIconsMaterial.RadioButtonChecked />}
          />
        }
      />
    </div>
  );
}

export default CreditCardRadioButton;
