import React from "react";
import HomeButton3 from "../HomeButton3";
import ProductsButton4 from "../ProductsButton4";
import Button3 from "../Button3";
import Left from "../Left";
import CloseMenuButton from "../CloseMenuButton";
import "./NavbarOpen.css";

function NavbarOpen(props) {
  const { button3Props, leftProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="navbar-open screen">
        <div className="flex-col-3">
          <HomeButton3 />
          <ProductsButton4 />
          <Button3 className={button3Props.className} />
          <Left className={leftProps.className} />
        </div>
        <CloseMenuButton />
      </div>
    </div>
  );
}

export default NavbarOpen;
