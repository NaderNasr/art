import React, { useRef, useState } from 'react';
import { useHitTest, useInteraction, Interactive } from '@react-three/xr';
import { useTexture, Plane } from '@react-three/drei';
// import Marker from './Marker';
import Art from './Art';

const HitTest = ({ dimensions }) => {
  const [placed, setPlaced] = useState(false);
  const [placement, setPlacement] = useState([]);
  const ref = useRef();
  // const texture = useTexture(image);

  useInteraction(ref, 'onSelect', () => {
    setPlaced(true);
    ref.current.position.x = placement[0];
    ref.current.position.y = placement[1];
    ref.current.position.z = placement[2];
  });

  useHitTest((hit) => {
    if (placed) return;
    hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale);
    const x = ref.current.position.x;
    const y = ref.current.position.y;
    const z = ref.current.position.z;
    setPlacement([x, y, z]);
  });

  return (
  <Interactive>
    <Plane ref={ref} args={dimensions} />
    {placed && <Art position={placement} dimensions={dimensions} />}
  </Interactive>
  )
}

export default HitTest;