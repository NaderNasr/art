import React from 'react';

const Art = ({ position, dimensions, texture }) => {

  return (
      <mesh position={position}>
        <planeGeometry args={dimensions} />
        <meshStandardMaterial map={texture} />
      </mesh>
  )
}

export default Art;