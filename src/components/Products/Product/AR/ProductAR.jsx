import React, {Suspense} from 'react';
import { useParams } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';
import { ARCanvas, DefaultXRControllers } from '@react-three/xr';

import HitTest from './HitTest';

const ProductAR = ({ products }) => {
  const params = useParams();
  const targetProduct = products.find(product => product.id === params.productId);
  const image = targetProduct.image.url;
  const dimensions = targetProduct.image.image_dimensions;

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

  return (
    <div style={{ height: "35rem" }}>
      <ARCanvas className="canvas" sessionInit={{ requiredFeatures: ['hit-test'] }}>
        <OrbitControls />
        <DefaultXRControllers />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <HitTest image={image} />
        </Suspense>
      </ARCanvas>
    </div>
  )
}

export default ProductAR;