import React, { useRef, useState } from 'react';
import { useHitTest, useInteraction } from '@react-three/xr';
import { useTexture } from '@react-three/drei';
import Marker from './Marker';
import Art from './Art';

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

  if (!placed) {
    return <Marker ref={ref} dimensions={dimensions} texture={texture} />
  }
  return <Art position={placement} dimensions={dimensions} texture={texture} />
}

export default HitTest;