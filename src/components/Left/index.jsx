import React from "react";
import Button4 from "../Button4";
import Button5 from "../Button5";
import Button6 from "../Button6";
import Button7 from "../Button7";
import Button8 from "../Button8";
import Button9 from "../Button9";
import Button10 from "../Button10";
import Button11 from "../Button11";
import Button12 from "../Button12";
import "./Left.css";

function Left(props) {
  const { className } = props;

  return (
    <div className={`left ${className || ""}`}>
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

export default Left;
