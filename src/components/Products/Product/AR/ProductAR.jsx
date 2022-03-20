import React from 'react';
import { useParams } from 'react-router-dom';

const ProductAR = ({ products }) => {
  const params = useParams();

  const targetProduct = products.find(product => product.id = params.productId);
  

  return(
    <p>AR is the future! Current product: {params.productId}</p>
  )
}

export default ProductAR;