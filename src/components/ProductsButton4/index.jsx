import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./ProductsButton4.css";

function ProductsButton4() {
  return (
    <Link to="/products-page-mobile">
      <div className="products-button">
        <MuiMaterial.Button
          endIcon=""
          startIcon=""
          size="medium"
          color="primary"
          disabled={false}
          variant="contained"
          disableElevation={false}
        >
          All Products
        </MuiMaterial.Button>
      </div>
    </Link>
  );
}

export default ProductsButton4;
