import React from 'react';
import { useTexture } from '@react-three/drei';


const Exhibit = ({ position, dimensions, image }) => {

  const testTexture = useTexture(image);
  
  return(
    <mesh position={position}>
      <planeGeometry args={dimensions} />
      <meshStandardMaterial map={testTexture} />
    </mesh>
  )
}

export default Exhibit;