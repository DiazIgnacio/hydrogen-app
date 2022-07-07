import React from 'react'
import HomeButton5 from '../HomeButton5/index'
import TextField from '../TextField/index'
import Button2 from '../Button2/index'
import CartButton5 from '../CartButton5/index'
import Left from '../Left/index'
import Rating from '../Rating/index'
import './ProductsPageDesktop.css'

function ProductsPageDesktop(props) {
  const {
    button2Props,
    leftProps,
    rating1Props,
    rating2Props,
    rating3Props,
    rating4Props,
    rating5Props,
    products
  } = props

  return (
    <div className="container-center-horizontal">
      <div className="products-page-desktop screen">
        <div className="navbar-7">
          <HomeButton5 />
          <TextField />
          <Button2 className={button2Props.className} />
          <CartButton5 />
        </div>
        <div className="flex-row-15">
          <Left className={leftProps.className} />
          <div className="flex-row-16">
            <div className="overlap-group-container-3">
              {/* Product */}
              <div className="overlap-group-11">
                <img className="image-17" src={products[0].imageSrc} />
                <p className="desc-16 inter-normal-eerie-black-16px">
                  {products[0].title}
                </p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">
                  $ {products[0].price}
                </div>
                <p className="additional-17 valign-text-middle inter-normal-topaz-14px">
                  {products[0].description}
                </p>
                <Rating />
              </div>

              {/* Product */}
              <div className="overlap-group-12">
                <img className="image-17" src={products[1].imageSrc} />
                <p className="desc-16 inter-normal-eerie-black-16px">
                  {products[1].title}
                </p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">
                  $ {products[1].price}
                </div>
                <p className="additional-17 valign-text-middle inter-normal-topaz-14px">
                  {products[1].description}
                </p>
                <Rating />
              </div>

              {/* Product */}
              <div className="overlap-group-13">
                <img className="image-17" src={products[2].imageSrc} />
                <p className="desc-16 inter-normal-eerie-black-16px">
                  {products[2].title}
                </p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">
                  $ {products[2].price}
                </div>
                <div className="additional-18 valign-text-middle inter-normal-topaz-14px">
                  {products[2].description}
                </div>
                <Rating className={rating1Props.className} />
              </div>
            </div>
            <div className="flex-row-item">
              {/* Product */}
              <div className="overlap-group9">
                <img className="image-19" src={products[3].imageSrc} />
                <p className="desc-17 inter-normal-eerie-black-16px">
                  {products[3].title}
                </p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">
                  $ {products[3].price}
                </div>
                <p className="additional-19 valign-text-middle inter-normal-topaz-14px">
                  <span>
                    <span className="span0-3 inter-normal-topaz-14px">
                      {products[3].description}
                    </span>
                  </span>
                </p>
                <Rating />
              </div>

              {/* Product */}
              <div className="ecommerce-item-desktop-6">
                <img className="image-18" src={products[4].imageSrc} />
                <p className="desc-17 inter-normal-eerie-black-16px">
                  {products[4].title}
                </p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">
                  $ {products[4].price}
                </div>
                <div className="additional-21 valign-text-middle inter-normal-topaz-14px">
                  {products[4].description}
                </div>
                <Rating className={rating2Props.className} />
              </div>

              {/* Product */}
              <div className="overlap-group2-3">
                <img className="image-18" src={products[5].imageSrc} />
                <div className="desc-17 inter-normal-eerie-black-16px">
                  {products[5].title}
                </div>
                <div className="price-16 valign-text-middle inter-bold-black-24px">
                  $ {products[5].price}
                </div>
                <p className="additional-20 valign-text-middle inter-normal-topaz-14px">
                  {products[5].description}
                </p>
                <Rating />
              </div>
            </div>
            <div className="overlap-group-container-4">
              {/* Product */}
              <div className="overlap-group-11">
                <img className="image-17" src={products[6].imageSrc} />
                <p className="desc-16 inter-normal-eerie-black-16px">
                  {products[6].title}
                </p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">
                  $ {products[6].price}
                </div>
                <div className="additional-18 valign-text-middle inter-normal-topaz-14px">
                  {products[6].description}
                </div>
                <Rating className={rating3Props.className} />
              </div>

              {/* Product */}
              <div className="overlap-group-12">
                <img className="image-17" src={products[7].imageSrc} />
                <div className="desc-16 inter-normal-eerie-black-16px">
                  {products[7].title}
                </div>
                <div className="price-15 valign-text-middle inter-bold-black-24px">
                  $ {products[7].price}
                </div>
                <p className="additional-22 valign-text-middle inter-normal-topaz-14px">
                  <span>
                    <span className="span0-3 inter-normal-topaz-14px">
                      {products[7].description}
                    </span>
                  </span>
                </p>
                <Rating className={rating4Props.className} />
              </div>

              {/* Product */}
              <div className="overlap-group-13">
                <img className="image-17" src={products[8].imageSrc} />
                <p className="desc-16 inter-normal-eerie-black-16px">
                  {products[8].title}
                </p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">
                  $ {products[8].price}
                </div>
                <p className="additional-17 valign-text-middle inter-normal-topaz-14px">
                  {products[8].description}
                </p>
                <Rating />
              </div>
            </div>
            <div className="flex-row-item">
              {/* Product */}
              <div className="overlap-group7-1">
                <img className="image-18" src={products[9].imageSrc} />
                <p className="desc-17 inter-normal-eerie-black-16px">
                  {products[9].title}
                </p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">
                  $ {products[9].price}
                </div>
                <p className="additional-20 valign-text-middle inter-normal-topaz-14px">
                  {products[9].description}
                </p>
                <Rating />
              </div>

              {/* Product */}
              <div className="overlap-group4-2">
                <img className="image-18" src={products[10].imageSrc} />
                <p className="desc-17 inter-normal-eerie-black-16px">
                  {products[10].title}
                </p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">
                  $ {products[10].price}
                </div>
                <p className="additional-20 valign-text-middle inter-normal-topaz-14px">
                  {products[10].description}
                </p>
                <Rating />
              </div>

              {/* Product */}
              <div className="overlap-group-14">
                <img className="image-18" src={products[11].imageSrc} />
                <p className="desc-17 inter-normal-eerie-black-16px">
                  {products[11].title}
                </p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">
                  $ {products[11].price}
                </div>
                <p className="additional-19 valign-text-middle inter-normal-topaz-14px">
                  <span>
                    <span className="span0-3 inter-normal-topaz-14px">
                      {products[11].description}
                    </span>
                  </span>
                </p>
                <Rating className={rating5Props.className} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPageDesktop
