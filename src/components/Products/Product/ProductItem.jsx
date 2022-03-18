import React from "react";
// import '@google/model-viewer'
import useStyles from './styles'

const ProductItem = ({ product }) => {

  const classes = useStyles()
  //Remove html tags from JSON data

  // const regex = /(<([^>]+)>)/ig
  // const description = product.description
  // const descriptionStriped = description.replace(regex, "");

  return (
    <>
      <div>
      <img  className={classes.productImage} alt="" src={product.image?.url}/>
      <p>{product.name}</p>
      <ul>
        <li>{product.is.sold_out ? "Sold out" : product.inventory.available + " units"}</li>
      </ul>
      </div>
    </>
  );
};

export default ProductItem;