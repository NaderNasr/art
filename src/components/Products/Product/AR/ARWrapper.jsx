import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

// using this component for nested routes... outlet may be causing problems...

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
    <div>
      <Button startIcon={<ShoppingCartCheckoutIcon />} onClick={() => onAddToCart(targetProduct.id, 1)}>Add To Cart</Button>
      <Outlet />
    </div>
  );
}

export default ARWrapper;