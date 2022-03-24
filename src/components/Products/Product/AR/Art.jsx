import React from 'react';

const Art = ({ position, dimensions, texture }) => {

  return (
      <mesh position={position} rotation={[0, 0, 0]}>
        <planeGeometry args={dimensions} />
        <meshStandardMaterial map={texture} />
      </mesh>
  )
}

export default Art;