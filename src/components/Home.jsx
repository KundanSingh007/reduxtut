import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__480.png"
          alt=""
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://i.gadgets360cdn.com/products/large/iphone-12-all-404x800-1602616616.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://i.gadgets360cdn.com/products/large/iphone-12-all-404x800-1602616616.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
