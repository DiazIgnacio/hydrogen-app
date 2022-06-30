import React from "react";
import "./Discover.css";

function Discover(props) {
  const { className } = props;

  return (
    <div className={`discover ${className || ""}`}>
      <div className="discover-1">
        <img className="group-6" src="/img/group-4@2x.svg" />
      </div>
    </div>
  );
}

export default Discover;
