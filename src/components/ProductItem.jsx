import React from "react";
import '../styles/productItem.css';
// import '@google/model-viewer'

const ProductItem = ({ product }) => {

  //Remove html tags from JSON data

  // const regex = /(<([^>]+)>)/ig
  // const description = product.description
  // const descriptionStriped = description.replace(regex, "");

  return (
    <>
      <div>
      <img  style={{width:'200px'}} alt="" src={product.image?.url}/>
      <p>{product.name}</p>
      <ul>
        <li>{product.is.sold_out ? "Sold out" : product.inventory.available + " units"}</li>
      </ul>
      </div>
    </>
  );
};

export default ProductItem;