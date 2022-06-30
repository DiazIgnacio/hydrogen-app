import React from "react";
import Button from "../Button";
import ProductsButton2 from "../ProductsButton2";
import CartButton2 from "../CartButton2";
import Rating from "../Rating";
import "./HomePageTablet.css";

function HomePageTablet(props) {
  const {
    overlapGroup,
    place,
    topProducts,
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
    spanText1,
    spanText2,
    image4,
    desc4,
    price4,
    additional3,
    image5,
    desc5,
    price5,
    additional4,
    ratingProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-page-tablet screen">
        <div className="overlap-group7">
          <div className="overlap-group-6" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="place-2 valign-text-middle">{place}</div>
          </div>
          <div className="navbar-3">
            <Button />
            <ProductsButton2 />
            <CartButton2 />
          </div>
        </div>
        <div className="top-products-2 valign-text-middle">{topProducts}</div>
        <div className="products-1">
          <div className="overlap-group-container">
            <div className="overlap-group-7">
              <img className="image-8" src={image1} />
              <p className="desc-6 inter-normal-eerie-black-16px">{desc1}</p>
              <div className="price-6 valign-text-middle inter-bold-black-24px">{price1}</div>
              <p className="additional-9 valign-text-middle inter-normal-topaz-14px">{additional1}</p>
              <Rating />
            </div>
            <div className="overlap-group3-1">
              <img className="image-7" src={image2} />
              <p className="desc-7 inter-normal-eerie-black-16px">{desc2}</p>
              <div className="price-7 valign-text-middle inter-bold-black-24px">{price2}</div>
              <p className="additional-8 valign-text-middle inter-normal-topaz-14px">{additional2}</p>
              <Rating />
            </div>
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group2-2">
              <img className="image-9" src={image3} />
              <p className="desc-6 inter-normal-eerie-black-16px">{desc3}</p>
              <div className="price-6 valign-text-middle inter-bold-black-24px">{price3}</div>
              <p className="additional-10 valign-text-middle inter-normal-topaz-14px">
                <span>
                  <span className="span0-1 inter-normal-topaz-14px">{spanText1}</span>
                  <span className="span1-1 roboto-medium-topaz-14px">{spanText2}</span>
                </span>
              </p>
              <Rating />
            </div>
            <div className="overlap-group4">
              <img className="image-7" src={image4} />
              <p className="desc-7 inter-normal-eerie-black-16px">{desc4}</p>
              <div className="price-7 valign-text-middle inter-bold-black-24px">{price4}</div>
              <p className="additional-8 valign-text-middle inter-normal-topaz-14px">{additional3}</p>
              <Rating />
            </div>
          </div>
          <div className="overlap-group1-1">
            <img className="image-7" src={image5} />
            <p className="desc-7 inter-normal-eerie-black-16px">{desc5}</p>
            <div className="price-7 valign-text-middle inter-bold-black-24px">{price5}</div>
            <div className="additional-11 valign-text-middle inter-normal-topaz-14px">{additional4}</div>
            <Rating className={ratingProps.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageTablet;
