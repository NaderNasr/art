import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Exhibit from './Exhibit';

const Gallery = ({ products }) => {
  // const targetProduct = products.find(product => product.id === params.productId);

  // const image = 'https://vast-earth-27464.herokuapp.com/' + targetProduct.image.url; // workaround for missing CORS
  //                                                                                    // headers on commerce.js images 😞

  console.log(products);

  const testImage = 'https://vast-earth-27464.herokuapp.com/' + products[0].image.url

  const getDimensions = (image) => {
    return [image.image_dimensions.height, image.image_dimensions.width];
  }

  const rescaleImage = (dimensionArray) => {
    let planeWidth = 1;
    let planeHeight = 1;
    const height = dimensionArray[0];
    const width = dimensionArray[1];

    if (height > width) {
      planeWidth = width / height;
    }
    if (height < width) {
      planeHeight = height / width;
    }
    return [planeWidth * 2, planeHeight * 2];
  }

  const testDimensions = products[0].image.image_dimensions;

  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Exhibit position={[0, 0, 0]} dimensions={rescaleImage(testDimensions.height, testDimensions.width)} image={testImage} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default Gallery;