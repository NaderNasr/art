import React from 'react';
import { Reflector } from '@react-three/drei';

const Floor = (props) => {

  return(
    <Reflector>
      {(Material, props) => <Material color="#f0f0f0" metalness={0} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
}

export default Floor;