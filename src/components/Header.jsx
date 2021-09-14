import React from "react";
import cartImage from "./cart.png";

function Header(props) {
  console.warn(props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src={cartImage} alt="" />
      </div>
    </div>
  );
}

export default Header;
