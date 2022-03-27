import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const ARWrapper = ({ products, onAddToCart }) => {
  const params = useParams();
  const targetProduct = products.find(product => product.id === params.productId);

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      const button = document.querySelector('#ARButton')
      if (button) {
        document.body.remove(button)
        window.location.reload();
      }
    }
  }, [])

  return (
    <div className="ARdiv">
      {targetProduct.is.sold_out ? <></> :
        <>
          <br />
          <Button
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => onAddToCart(targetProduct.id, 1)}
            style={{ color: "#BB86FC", left: "calc(45% - 50px)" }}
          >Add To Cart</Button>
        </>}
      <br />
      <img
        src={targetProduct.image.url}
        style={{ display: "block", width: "40%", paddingTop: "10px", marginLeft: "auto", marginRight: "auto" }}
        alt={`Preview of ${targetProduct.name}`}
      />
      <Outlet />
    </div>
  );
}

export default ARWrapper;