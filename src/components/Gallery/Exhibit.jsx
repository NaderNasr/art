import React from 'react';
import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';


const Exhibit = ({ position, dimensions, image }) => {

  const testTexture = useTexture(image);
  
  return(
    <mesh position={position}>
      <planeGeometry args={dimensions} />
      <meshStandardMaterial map={testTexture} side={DoubleSide}/>
    </mesh>
  )
}

export default Exhibit;