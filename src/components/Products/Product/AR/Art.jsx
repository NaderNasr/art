import React from 'react';
import { PlaneGeometry, MeshStandardMaterial } from 'three';

const Art = ({ position, dimensions, texture }) => {

  return(
  <mesh position={position}>
    <PlaneGeometry args={dimensions} />
    <MeshStandardMaterial map={texture} />
  </mesh>
  )
}

export default Art;