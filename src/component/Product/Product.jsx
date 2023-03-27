import React from "react";
import "./Product.css";

const Product = (props) => {
//   console.log(props);

  const { img, name, seller, quantity, price } = props.product;
  const handleAddToCart = props.handleAddToCart;


  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <p className="product-manufacture">Manufacturer: {seller}</p>
        <p>Rating: {}Stars</p>
      </div>
      <button onClick={ () => handleAddToCart(props.product)} className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
