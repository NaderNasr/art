import React from 'react';
import { RayGrab } from '@react-three/xr';

const Art = ({ position, dimensions, texture }) => {

  return (
      <mesh position={position}>
        <planeGeometry args={dimensions} />
        <meshStandardMaterial map={texture} />
      </mesh>
  )
}

export default Art;