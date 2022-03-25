import React from 'react';
import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';
import * as THREE from 'three';

// const lookAtExhibit = new THREE.Vector3();

const Exhibit = ({ position, dimensions, image, rotation }) => {

  const testTexture = useTexture(image);
  
  return(
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={dimensions} />
      <meshStandardMaterial map={testTexture} side={DoubleSide}/>
    </mesh>
  )
}

export default Exhibit;