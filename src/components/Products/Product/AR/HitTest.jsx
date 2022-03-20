import React, { useRef, useState } from 'react';
import { useHitTest, useInteraction } from '@react-three/xr';
import { useTexture } from '@react-three/drei';
import { PlaneGeometry } from 'three';
import { MeshStandardMaterial } from 'three';

const HitTest = ({ image, dimensions }) => {
  const [placed, setPlaced] = useState(false);
  const [placement, setPlacement] = useState([]);

  const ref = useRef();
  const texture = useTexture(image);

  useInteraction(ref, 'onSelect', () => {
    if (placed) return;
    setPlaced(true);
  });

  useHitTest((hit) => {
    if (placed) return;
    hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale);
    const x = ref.current.position.x;
    const y = ref.current.position.y;
    const z = ref.current.position.z;
    setPlacement([x, y, z]);
  });

  const Marker = () => (
    <mesh ref={ref}>
      <PlaneGeometry args={dimensions} />
      <MeshStandardMaterial map={texture} opacity={0.5} />
    </mesh>
  )

}

export default HitTest;