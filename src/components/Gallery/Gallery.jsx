import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Exhibit from './Exhibit';

const Gallery = ({ products }) => {
  const carousel = [];

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

  for (let i = 0; i < products.length; i++) {
    const t = i / products.length * 2 * Math.PI;
    const x = Math.cos(t) * 4;
    const z = Math.sin(t) * 4;

    let rotation = -t + 1.5;
    
    console.log(rotation);

    carousel.push(
      <Exhibit
        key={i}
        position={[x, 0, z]}
        dimensions={rescaleImage(getDimensions(products[i].image))}
        // url below is a workaround for missing CORS headers... 😞
        image={'https://vast-earth-27464.herokuapp.com/' + products[i].image.url}
        rotation={[0, rotation, 0]}
      />
    )
  }

  return (
    <Canvas style={{ height: "25em" }}>
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.5}/>
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <group>
        {carousel}
        </group>
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default Gallery;