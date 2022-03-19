import { Button } from "@mui/material";
import React from "react";
import '../styles/productItem.css';
import AvailableProductsAlert from "./AvailableProductsAlert";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Poster from "../../src/1.gltf"
import '@google/model-viewer'

const ProductItem = ({ product }) => {

  //Remove html tags from JSON data

  // const regex = /(<([^>]+)>)/ig
  // const description = product.description
  // const descriptionStriped = description.replace(regex, "");

  return (
    <div>
      <AvailableProductsAlert product={product} />
      <img style={{ height: '10em' }} alt="product" src={product.image?.url} />
      {/* <model-viewer src={Poster} ar ar-placement="wall" ar-modes="webxr scene-viewer quick-look" camera-controls alt="A 3D model of some wall art"></model-viewer> */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{fontSize:'24px'}}>{product.name}</p>
        {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />}>Add To Cart</Button>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <p>{product.price.formatted_with_code}</p>
      </div>
    </div>
  );
};

export default ProductItem;