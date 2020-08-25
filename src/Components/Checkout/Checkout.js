import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
      <img
        className="checkout-ad"
        src="https://cdn.zeebiz.com/sites/default/files/3_85.jpg"
      />
      
      {basket.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {/* List out all checkout products */}
          {basket.map((item) => {
            console.log(item);
            return(
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            )
          })}
        </div>
      )}
    </div>
    {basket.length>0 && (
        <div className="checkout-right">
          <Subtotal/>
        </div>
    )}
    </div>
  );
}

export default Checkout;
