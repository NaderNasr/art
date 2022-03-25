import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';

const Gallery = ({ products }) => {
  console.log(products);

  return(
    <Canvas>
      <ambientLight />
      <Suspense>

      </Suspense>
    </Canvas>
  )
}

export default Gallery;