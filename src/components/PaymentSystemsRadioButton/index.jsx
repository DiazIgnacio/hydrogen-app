import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./PaymentSystemsRadioButton.css";

function PaymentSystemsRadioButton() {
  return (
    <div className="payment-systems-radio-button">
      <MuiMaterial.FormControlLabel
        label="By Payment Systems"
        control={
          <MuiMaterial.Radio
            checked
            size="medium"
            color="primary"
            disabled={false}
            checkedIcon={<MuiIconsMaterial.RadioButtonChecked />}
          />
        }
      />
    </div>
  );
}

export default PaymentSystemsRadioButton;
