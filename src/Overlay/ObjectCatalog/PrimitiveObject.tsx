import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from 'react-three-fiber';
import * as drei from 'drei';
import { MeshStandardMaterial, Object3D } from 'three';
import styles from './PrimitiveObject.module.scss';

function PrimitiveObjectInternal(props) {
  const {
    registerPointerEnterCallback,
    registerPointerLeaveCallback,
    objectType,
  } = props;

  const obj = useRef<Object3D>();
  const { camera } = useThree();

  const [animate, setAnimate] = useState(false);

  useFrame(() => {
    if (obj.current) {
      const shape = obj.current;

      if (animate) {
        shape.rotation.y += 0.015;
      }
    }
  });

  registerPointerEnterCallback(() => setAnimate(true));
  registerPointerLeaveCallback(() => setAnimate(false));

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
        {React.cloneElement(React.createElement(drei[objectType]), {
          material,
        })}
      </group>
    </React.Fragment>
  );
}

export default (props) => {
  const callbacks = {
    onPointerEnter: () => {},
    onPointerLeave: () => {},
  };

  return (
    <div
      className={styles.canvasContainer}
      onClick={() => props.onClick()}
    >
      <Canvas
        colorManagement
        camera={{ zoom: 2.5 }}
        onPointerEnter={() => callbacks.onPointerEnter()}
        onPointerLeave={() => callbacks.onPointerLeave()}
        // onPointerDown={props.onPointerDown}
        // onPointerUp={props.onPointerUp}
      >
        <PrimitiveObjectInternal
          objectType={props.objectType}
          registerPointerEnterCallback={(cb) => (callbacks.onPointerEnter = cb)}
          registerPointerLeaveCallback={(cb) => (callbacks.onPointerLeave = cb)}
        />
      </Canvas>
    </div>
  );
};
