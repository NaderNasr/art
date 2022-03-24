import { Button } from "@mui/material";
import React, { useState } from "react";
// import AvailableProductsAlert from "../../AvailableProductsAlert";
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import Poster from "../../src/1.gltf"
// import '@google/model-viewer'
// import { BrowserView, MobileView } from 'react-device-detect';
import ProductModal from "./ProductModal";
import './styles.css'

const ProductItem = ({ product, onAddToCart }) => {
  const [open, setOpen] = useState(false); // Add to custom hook
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{borderRadius: '25px'}}>
      <div className="container">
        <img src={product.image?.url} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="product__name">{product.name}</div>
          <Button className="learn__more" onClick={handleOpen}>
          <p>Learn More</p>
          </Button>
          <ProductModal handleClose={handleClose} open={open} product={product} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
