import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';
import { ARCanvas, DefaultXRControllers } from '@react-three/xr';
import { TextureLoader } from 'three';

import HitTest from './HitTest';

const ProductAR = ({ products }) => {
  const params = useParams();
  const targetProduct = products.find(product => product.id === params.productId);

  const image = 'https://cors-anywhere.herokuapp.com/' + targetProduct.image.url;
  console.log(image);

  const dimensions = targetProduct.image.image_dimensions;
  let texture = null;

  // const loadTexture = () => {
  //   const loader = new TextureLoader();
  //   const newTexture = loader.load('./hand.jpg');
  //   return newTexture;
  // }
  
  const rescaleImageForAR = (height, width) => {
    const aspect = height / width;
    console.log(aspect);
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
  console.log(planeDimensions);

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