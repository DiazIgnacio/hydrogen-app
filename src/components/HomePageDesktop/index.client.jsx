import React from "react";
import Button from "../Button/index";
import TextField from "../TextField/index";
import ProductsButton from "../ProductsButton/index";
import CartButton from "../CartButton/index";
import Rating from "../Rating/index";
import "./HomePageDesktop.css";

function HomePageDesktop(props) {
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
    spanText1,
    spanText2,
    image3,
    desc3,
    price3,
    additional2,
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
      <div className="home-page-desktop screen">
        <div className="overlap-group5">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <h1 className="place valign-text-middle">{place}</h1>
          </div>
          <div className="navbar">
            <Button />
            <TextField />
            <ProductsButton />
            <CartButton />
          </div>
        </div>
        <div className="top-products valign-text-middle poppins-medium-black-72px">{topProducts}</div>
        <div className="products">
          <div className="overlap-group3">
            <img className="image" src={require(image1)} />
            <p className="desc inter-normal-eerie-black-16px">{desc1}</p>
            <div className="price valign-text-middle inter-bold-black-24px">{price1}</div>
            <p className="additional valign-text-middle inter-normal-topaz-14px">{additional1}</p>
            <Rating />
          </div>
          <div className="overlap-group2">
            <img className="image-1" src={image2} />
            <p className="desc-1 inter-normal-eerie-black-16px">{desc2}</p>
            <div className="price-1 valign-text-middle inter-bold-black-24px">{price2}</div>
            <p className="additional-1 valign-text-middle inter-normal-topaz-14px">
              <span>
                <span className="span0 inter-normal-topaz-14px">{spanText1}</span>
                <span className="span1 roboto-medium-topaz-14px">{spanText2}</span>
              </span>
            </p>
            <Rating />
          </div>
          <div className="overlap-group">
            <img className="image" src={image3} />
            <p className="desc inter-normal-eerie-black-16px">{desc3}</p>
            <div className="price valign-text-middle inter-bold-black-24px">{price3}</div>
            <div className="additional-2 valign-text-middle inter-normal-topaz-14px">{additional2}</div>
            <Rating className={ratingProps.className} />
          </div>
          <div className="overlap-group-2">
            <img className="image-2" src={image4} />
            <p className="desc-1 inter-normal-eerie-black-16px">{desc4}</p>
            <div className="price-1 valign-text-middle inter-bold-black-24px">{price4}</div>
            <p className="additional-3 valign-text-middle inter-normal-topaz-14px">{additional3}</p>
            <Rating />
          </div>
          <div className="overlap-group">
            <img className="image" src={image5} />
            <p className="desc inter-normal-eerie-black-16px">{desc5}</p>
            <div className="price valign-text-middle inter-bold-black-24px">{price5}</div>
            <p className="additional valign-text-middle inter-normal-topaz-14px">{additional4}</p>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageDesktop;
