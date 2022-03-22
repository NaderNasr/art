import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';
import { ARCanvas, DefaultXRControllers } from '@react-three/xr';

import HitTest from './HitTest';

const ProductAR = ({ products }) => {
  
  const params = useParams();
  const targetProduct = products.find(product => product.id === params.productId);
  
  const image = 'https://vast-earth-27464.herokuapp.com/' + targetProduct.image.url; // workaround for missing CORS
                                                                                     // headers on commerce.js images 😞
  const dimensions = targetProduct.image.image_dimensions;
  
  const rescaleImageForAR = (height, width) => {
    let planeWidth = 1;
    let planeHeight = 1;
    if (height > width) {
      planeWidth = width / height;
    }
    if (height < width) {
      planeHeight = height / width;
    }
    return [planeWidth * 2, planeHeight * 2];
  }
  
  const planeDimensions = rescaleImageForAR(dimensions.height, dimensions.width);

  return (
    <div style={{ height: "35rem" }}>
      <ARCanvas className="canvas" sessionInit={{ requiredFeatures: ['hit-test'] }}>
        <OrbitControls />
        <DefaultXRControllers />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <HitTest className='hittest' dimensions={planeDimensions} image={image} />
        </Suspense>
      </ARCanvas>
    </div>
  )
}

export default ProductAR;