import React, { useRef } from 'react';
import * as THREE from 'three';
import { Plane } from 'drei';

function Surface(props) {
  return (
    <mesh
      position={[0, 0, -0.01]}
      {...props}
    >
      <planeGeometry attach="geometry" args={[10, 10, 32, 32]} />
      <meshBasicMaterial attach="material" color={0x909399} wireframe={true} side={THREE.DoubleSide} />
      <lineBasicMaterial />
    </mesh>
  );
}

export default Surface;