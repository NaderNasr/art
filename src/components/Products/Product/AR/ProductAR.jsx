import React from 'react';
import { useParams } from 'react-router-dom';

const ProductAR = ({}) => {
  const params = useParams();
  return(
    <p>AR is the future! Current product: {params.productId}</p>
  )
}

export default ProductAR;