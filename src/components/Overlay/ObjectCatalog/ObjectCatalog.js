import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from 'react-three-fiber';
import { Box, Plane } from 'drei';
import { MeshStandardMaterial } from 'three';

function ObjectCatalogInternal() {
  const obj = useRef();
  const plane = useRef();
  const { camera } = useThree();

  const [animate, setAnimate] = useState(false);

  useFrame(() => {
    if (obj.current) {
      const shape = obj.current;

      if (animate) {
        shape.rotation.y += 0.015;
      }
    }

    if (plane.current) {
      // plane.transparent = true;
    }
  });

  const handlePointerOver = state => {
    setAnimate(state);
  };

  useEffect(() => {
    camera.position.z = 5;
    camera.position.y = 1;
    camera.rotation.x = -0.2;

    if (obj.current) {
      obj.current.rotation.y = 0.4;
    }
  });

  const material = new MeshStandardMaterial({ color: '#3E5B74' });

  return (
    <React.Fragment>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <group ref={obj}>
      <Box material={material} />
      </group>

      <Plane
        scale={[20, 20, 20]}
        position={[0, 0, 0]}
        ref={plane}
        onPointerOver={() => handlePointerOver(true)}
        onPointerOut={() => handlePointerOver(false)}
      >
        <meshBasicMaterial attach="material" transparent={true} opacity={0} />
      </Plane>
    </React.Fragment>
  );
}

export default () => {
  return (
    <Canvas
      colorManagement
      style={{ width: 160, height: 160, background: '#808A92' }}
      camera={{ zoom: 2.5 }}
    >
      <ObjectCatalogInternal />
    </Canvas>
  );
};
