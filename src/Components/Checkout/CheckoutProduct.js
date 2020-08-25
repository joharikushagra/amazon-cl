import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "../../Context/StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
 
 const[{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
      //remove item from basket
      dispatch({
          type:"REMOVE_FROM_BASKET",
          id,
      })
 }

    return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <span role="img">⭐</span>;
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
