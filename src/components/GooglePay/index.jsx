import React from "react";
import "./GooglePay.css";

function GooglePay(props) {
  const { className } = props;

  return (
    <div className={`google-pay ${className || ""}`}>
      <div className="google-pay-1">
        <img className="group" src="/img/group@2x.svg" />
      </div>
    </div>
  );
}

export default GooglePay;
