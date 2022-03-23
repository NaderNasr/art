import { Button } from "@mui/material";
import React, { useState } from "react";
import AvailableProductsAlert from "../../AvailableProductsAlert";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import Poster from "../../src/1.gltf"
import '@google/model-viewer'
import { BrowserView, MobileView } from 'react-device-detect';



import ProductModal from "./ProductModal";

const CategoryItem = ({ product, onAddToCart }) => {
  const [open, setOpen] = useState(false); // Add to custom hook
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AvailableProductsAlert product={product} />
      <BrowserView>
        <img style={{ height: '20em' }} alt="product" src={product.image?.url} />
      </BrowserView>
      <MobileView>
        <img style={{ height: '15em' }} alt="product" src={product.image?.url} />
      </MobileView>
      {/* <model-viewer src={Poster} ar ar-placement="wall" ar-modes="webxr scene-viewer quick-look" camera-controls alt="A 3D model of some wall art"></model-viewer> */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '24px' }}>{product.name}</p>
        {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />} onClick={() => onAddToCart(product.id, 1)}>Add To Cart</Button>}
      </div>
      <Button onClick={handleOpen}>Learn More</Button>
      <ProductModal handleClose={handleClose} open={open} product={product} onAddToCart={onAddToCart} />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <p>{product.price.formatted_with_code}</p>
      </div>
    </div>
  );
};

export default CategoryItem;