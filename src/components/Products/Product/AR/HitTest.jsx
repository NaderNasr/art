import React, { useRef, useState } from 'react';
import { useHitTest, Interactive } from '@react-three/xr';
import { useTexture, Ring } from '@react-three/drei';
import Art from './Art';

const HitTest = ({ dimensions, image }) => {
  const [placed, setPlaced] = useState(false);
  const [placement, setPlacement] = useState([]);
  const [marker, setMarker] = useState([0.1, 0.2, 32]);
  const ref = useRef();

  const texture = useTexture(image);

  const onSelect = () => {
    if (placed) {
      setPlaced(false);
      setMarker([0.1, 0.2, 32]);
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
    <Ring ref={ref} args={marker}>
      <meshStandardMaterial map={texture} />
    </Ring>
    {placed && <Art position={placement} dimensions={dimensions} texture={texture} />}
  </Interactive>
  )
}

export default HitTest;