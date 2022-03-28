import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Group = ({ exhibits }) => {
  const ref = useRef();
  useFrame(() => ref.current.rotation.y += 0.005)

  return(
    <group ref={ref}>
      {exhibits}
    </group>
  )
}

export default Group;