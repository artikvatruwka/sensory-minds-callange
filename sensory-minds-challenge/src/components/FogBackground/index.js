//this fog is coming from https://codepen.io/Ravyre/details/gXawyY
import React from "react";
import "./styles.css";
const FogBackground = () => {
  return (
    <div className="fog">
      <div id="foglayer_01" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_02" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_03" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
    </div>
  );
};
export default FogBackground;
