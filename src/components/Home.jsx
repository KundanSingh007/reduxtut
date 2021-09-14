import React from "react";
import iphoneImage from "./iphone.jpg";

function Home(props) {
  return (
    <div>
      <h1>Basic Redux for Cart</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={iphoneImage} alt="" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
