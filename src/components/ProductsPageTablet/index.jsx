import React from "react";
import Button from "../Button";
import Button2 from "../Button2";
import CartButton3 from "../CartButton3";
import Rating from "../Rating";
import Left from "../Left";
import "./ProductsPageTablet.css";

function ProductsPageTablet(props) {
  const {
    image1,
    desc1,
    price1,
    additional1,
    image2,
    desc2,
    price2,
    additional2,
    image3,
    desc3,
    price3,
    additional3,
    image4,
    desc4,
    price4,
    spanText1,
    spanText2,
    image5,
    desc5,
    price5,
    additional4,
    image6,
    desc6,
    price6,
    additional5,
    rating1Props,
    rating2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="products-page-tablet screen">
        <div className="navbar-4">
          <Button />
          <Button2 />
          <CartButton3 />
        </div>
        <div className="overlap-group5-1">
          <div className="right">
            <div className="overlap-group-container-2">
              <div className="overlap-group4-1">
                <img className="image-10" src={image1} />
                <p className="desc-8 inter-normal-eerie-black-16px">{desc1}</p>
                <div className="price-8 valign-text-middle inter-bold-black-24px">{price1}</div>
                <p className="additional-12 valign-text-middle inter-normal-topaz-14px">{additional1}</p>
                <Rating />
              </div>
              <div className="overlap-group-8">
                <img className="image-10" src={image2} />
                <p className="desc-8 inter-normal-eerie-black-16px">{desc2}</p>
                <div className="price-8 valign-text-middle inter-bold-black-24px">{price2}</div>
                <p className="additional-12 valign-text-middle inter-normal-topaz-14px">{additional2}</p>
                <Rating />
              </div>
              <div className="overlap-group-8">
                <img className="image-10" src={image3} />
                <p className="desc-8 inter-normal-eerie-black-16px">{desc3}</p>
                <div className="price-8 valign-text-middle inter-bold-black-24px">{price3}</div>
                <div className="additional-13 valign-text-middle inter-normal-topaz-14px">{additional3}</div>
                <Rating className={rating1Props.className} />
              </div>
            </div>
            <div className="flex-col">
              <div className="overlap-group3-2">
                <img className="image-12" src={image4} />
                <p className="desc-9 inter-normal-eerie-black-16px">{desc4}</p>
                <div className="price-9 valign-text-middle inter-bold-black-24px">{price4}</div>
                <p className="additional-14 valign-text-middle inter-normal-topaz-14px">
                  <span>
                    <span className="span0-2 inter-normal-topaz-14px">{spanText1}</span>
                    <span className="span1-2 roboto-medium-topaz-14px">{spanText2}</span>
                  </span>
                </p>
                <Rating />
              </div>
              <div className="ecommerce-item-desktop-5">
                <img className="image-11" src={image5} />
                <p className="desc-9 inter-normal-eerie-black-16px">{desc5}</p>
                <div className="price-9 valign-text-middle inter-bold-black-24px">{price5}</div>
                <div className="additional-15 valign-text-middle inter-normal-topaz-14px">{additional4}</div>
                <Rating className={rating2Props.className} />
              </div>
              <div className="overlap-group-9">
                <img className="image-11" src={image6} />
                <div className="desc-9 inter-normal-eerie-black-16px">{desc6}</div>
                <div className="price-9 valign-text-middle inter-bold-black-24px">{price6}</div>
                <p className="additional-16 valign-text-middle inter-normal-topaz-14px">{additional5}</p>
                <Rating />
              </div>
            </div>
          </div>
          <Left />
        </div>
      </div>
    </div>
  );
}

export default ProductsPageTablet;
