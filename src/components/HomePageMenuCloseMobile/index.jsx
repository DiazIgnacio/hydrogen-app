import React from "react";
import Button from "../Button";
import MenuButton from "../MenuButton";
import EcommerceItemDesktop from "../EcommerceItemDesktop";
import Rating from "../Rating";
import "./HomePageMenuCloseMobile.css";

function HomePageMenuCloseMobile(props) {
  const { heroBg, place, topProducts, image, desc, price, additional, ecommerceItemDesktopProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-page-menu-close-mobile screen">
        <div className="navbar-1">
          <Button />
          <MenuButton />
        </div>
        <div className="hero">
          <div className="overlap-group-3">
            <img className="hero-bg" src={heroBg} />
            <div className="place-1 valign-text-middle">{place}</div>
          </div>
        </div>
        <div className="top-products-1 valign-text-middle">{topProducts}</div>
        <EcommerceItemDesktop
          image={ecommerceItemDesktopProps.image}
          desc={ecommerceItemDesktopProps.desc}
          price={ecommerceItemDesktopProps.price}
          additional={ecommerceItemDesktopProps.additional}
        />
        <div className="ecommerce-item-desktop">
          <div className="overlap-group1">
            <img className="image-3" src={image} />
            <p className="desc-2 inter-normal-eerie-black-16px">{desc}</p>
            <div className="price-2 valign-text-middle inter-bold-black-24px">{price}</div>
            <p className="additional-4 valign-text-middle inter-normal-topaz-14px">{additional}</p>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMenuCloseMobile;
