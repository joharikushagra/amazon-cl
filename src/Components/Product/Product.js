import React from "react";
import './Product.css';
import {useStateValue} from '../../Context/StateProvider';

function Product({ id, title, price, rating, image }) {
    const [{basket},dispatch] = useStateValue()

    const addToBasket = ()=>{
      //Add item to basket....
      dispatch({
          type:'ADD_TO_BASKET',
          item:{
              id,
              title,
              image,
              price,
              rating,
          }
      })
    }
    
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
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
      </div>

      <img src={image} />
      <button className="product-button" onClick={addToBasket}>Add to basket</button>
    </div> 
  );
}

export default Product;
