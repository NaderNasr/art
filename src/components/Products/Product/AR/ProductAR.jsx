import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';
import { ARCanvas, DefaultXRControllers } from '@react-three/xr';

import HitTest from './HitTest';

const ProductAR = ({ products }) => {
  const params = useParams();
  const targetProduct = products.find(product => product.id === params.productId);

  const image = 'https://cors-anywhere.herokuapp.com/' + targetProduct.image.url;

  const dimensions = targetProduct.image.image_dimensions;
  // let texture = null;

  // const loadTexture = () => {
  //   const loader = new TextureLoader();
  //   const newTexture = loader.load('./hand.jpg');
  //   return newTexture;
  // }
  
  const rescaleImageForAR = (height, width) => {
    let planeWidth = 1;
    let planeHeight = 1;
    if (height > width) {
      planeWidth = width / height;
    }
    if (height < width) {
      planeHeight = height / width;
    }
    return [planeWidth, planeHeight];
  }

  const planeDimensions = rescaleImageForAR(dimensions.height, dimensions.width);

  // useEffect(() => {
  //   texture = loadTexture();
  // })

  return (
    <div style={{ height: "35rem" }}>
      <ARCanvas className="canvas" sessionInit={{ requiredFeatures: ['hit-test'] }}>
        <OrbitControls />
        <DefaultXRControllers />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <HitTest dimensions={planeDimensions} image={image} />
        </Suspense>
      </ARCanvas>
    </div>
  )
}

export default ProductAR;