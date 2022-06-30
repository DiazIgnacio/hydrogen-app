import React from "react";
import Rating from "../Rating";
import "./EcommerceItemDesktop.css";

function EcommerceItemDesktop(props) {
  const { image, desc, price, additional, className } = props;

  return (
    <div className={`ecommerce-item-desktop-1 ${className || ""}`}>
      <div className="overlap-group2-1">
        <img className="image-5" src={image} />
        <p className="desc-4 inter-normal-eerie-black-16px">{desc}</p>
        <div className="price-4 valign-text-middle inter-bold-black-24px">{price}</div>
        <p className="additional-6 valign-text-middle inter-normal-topaz-14px">{additional}</p>
        <Rating />
      </div>
    </div>
  );
}

export default EcommerceItemDesktop;
