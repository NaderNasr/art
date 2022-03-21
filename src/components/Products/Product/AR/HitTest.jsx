import React, { useRef, useState } from 'react';
import { useHitTest, Interactive, useXR } from '@react-three/xr';
import { useTexture, Plane } from '@react-three/drei';
import Art from './Art';

const HitTest = ({ dimensions, image }) => {
  const [placed, setPlaced] = useState(false);
  const [placement, setPlacement] = useState([]);
  const [marker, setMarker] = useState(dimensions);
  const ref = useRef();

  const texture = useTexture(image);

  const onSelect = () => {
    if (placed) {
      setPlaced(false);
      setMarker(dimensions);
    } else {
      setPlaced(true);
      setMarker([0, 0]);
    }
  }

  useHitTest((hit) => {
    if (placed) return;
    hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale);
    const x = ref.current.position.x;
    const y = ref.current.position.y;
    const z = ref.current.position.z;
    setPlacement([x, y, z]);
  });

  return (
  <Interactive onSelect={() => onSelect()}>
    <Plane ref={ref} args={marker}>
      <meshStandardMaterial map={texture} opacity={0.1} />
    </Plane>
    {placed && <Art position={placement} dimensions={dimensions} texture={texture} />}
  </Interactive>
  )
}

export default HitTest;