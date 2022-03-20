import React from 'react';
import { PlaneGeometry, MeshStandardMaterial } from 'three';

const Marker = ({ ref, dimensions, texture }) => {

  return(
  <mesh ref={ref}>
    <PlaneGeometry args={dimensions} />
    <MeshStandardMaterial map={texture} opacity={0.5} />
  </mesh>
  )
}

export default Marker;