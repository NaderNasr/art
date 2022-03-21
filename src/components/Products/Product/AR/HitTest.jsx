import React, { useRef, useState } from 'react';
import { useHitTest, useInteraction, Interactive, useXR } from '@react-three/xr';
import { useTexture, Plane } from '@react-three/drei';
// import Marker from './Marker';
import Art from './Art';

const HitTest = ({ dimensions, image }) => {
  const [placed, setPlaced] = useState(false);
  const [placement, setPlacement] = useState([]);
  const ref = useRef();

  const texture = useTexture(image);

  useInteraction(ref, 'onSelect', () => {
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

  return (
  <Interactive onSelect={() => console.log('click!')}>
    <Plane ref={ref} args={dimensions} />
    {placed && <Art position={placement} dimensions={dimensions} texture={texture} />}
  </Interactive>
  )
}

export default HitTest;