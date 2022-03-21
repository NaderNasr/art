import React, { useRef } from 'react';

const Art = ({ position, dimensions, texture }) => {
  const ref = useRef();
  console.log(texture);

  return(
  <mesh ref={ref} position={position}>
    <planeGeometry args={dimensions} />
    <meshStandardMaterial map={texture} />
  </mesh>
  )
}

export default Art;