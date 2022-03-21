import React, { useRef } from 'react';

const Art = ({ position, dimensions }) => {
  const ref = useRef();

  return(
  <mesh ref={ref} position={position}>
    <planeGeometry args={dimensions} />
    <meshStandardMaterial color={0xff0000} />
  </mesh>
  )
}

export default Art;