import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Instructions from './Instructions';


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
    <>
      <Instructions targetProduct={targetProduct} onAddToCart={onAddToCart} />
      <div className="ARdiv">
        <br />
        <img
          src={targetProduct.image.url}
          style={{ display: "block", width: "40%", paddingTop: "10px", marginLeft: "auto", marginRight: "auto" }}
          alt={`Preview of ${targetProduct.name}`}
        />
        <Outlet />
      </div>
    </>
  );
}

export default ARWrapper;