import React from 'react';
import { useParams } from 'react-router-dom';

const ProductAR = ({ products }) => {
  const params = useParams();
  const targetProduct = products.find(product => product.id === params.productId);
  const image = targetProduct.image.url;
  const dimensions  = targetProduct.image.image_dimensions;

  const rescaleImageForAR = (height, width) => {
    const aspect = height / width;
    let planeHeight = 0;
    let planeWidth = 0;

    if (aspect <= 1) {
      planeWidth = 1;
      planeHeight = 1 * aspect;
    } else {
      planeHeight = 1;
      planeWidth = 1 * aspect;
    }

    return [planeWidth, planeHeight];
  }

  const planeDimensions = rescaleImageForAR(dimensions.height, dimensions.width);

  return(
    <p>AR is the future! Current product: {params.productId}</p>
  )
}

export default ProductAR;