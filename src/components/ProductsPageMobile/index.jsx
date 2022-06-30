import React from "react";
import Button from "../Button";
import MenuButton2 from "../MenuButton2";
import EcommerceItemDesktop from "../EcommerceItemDesktop";
import Rating from "../Rating";
import "./ProductsPageMobile.css";

function ProductsPageMobile(props) {
  const { image, desc, price, additional, ecommerceItemDesktop1Props, ecommerceItemDesktop2Props, ratingProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="products-page-mobile screen">
        <div className="navbar-2">
          <Button />
          <MenuButton2 />
        </div>
        <EcommerceItemDesktop
          image={ecommerceItemDesktop1Props.image}
          desc={ecommerceItemDesktop1Props.desc}
          price={ecommerceItemDesktop1Props.price}
          additional={ecommerceItemDesktop1Props.additional}
          className={ecommerceItemDesktop1Props.className}
        />
        <EcommerceItemDesktop
          image={ecommerceItemDesktop2Props.image}
          desc={ecommerceItemDesktop2Props.desc}
          price={ecommerceItemDesktop2Props.price}
          additional={ecommerceItemDesktop2Props.additional}
          className={ecommerceItemDesktop2Props.className}
        />
        <div className="ecommerce-item-desktop-4">
          <div className="overlap-group-5">
            <img className="image-6" src={image} />
            <p className="desc-5 inter-normal-eerie-black-16px">{desc}</p>
            <div className="price-5 valign-text-middle inter-bold-black-24px">{price}</div>
            <div className="additional-7 valign-text-middle inter-normal-topaz-14px">{additional}</div>
            <Rating className={ratingProps.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPageMobile;
