import React, { useEffect, useRef } from 'react';
import { TransformControls, OrbitControls } from 'drei';
import { useThree } from 'react-three-fiber';
import { Euler } from 'three';
import { useControls, useScene } from '../../hooks';

export default function ExperienceControls() {
  const { objectTranslateEnd } = useScene();
  const {
    isOrbitEnabled,
    setOrbitEnabled,
    transformMode,
    controlledObject,
  } = useControls();

  const { camera, gl } = useThree();
  const transform = useRef();

  const onDragChange = (e) => {
    setOrbitEnabled(!e.value);

    if (!e.value) {
      controlledObject.dispatchEvent({ type: 'change' });
      objectTranslateEnd(controlledObject);
    }
  };

  useEffect(() => {
    const euler = new Euler(-0.444145, -0.73145, -0.307748, 'XYZ');
    camera.setRotationFromEuler(euler);
    const controls: any = transform.current;

    if (!controls) {
      return;
    }

    if (controlledObject) {
      controls.attach(controlledObject);
    } else {
      controls.detach();
    }

    controls.addEventListener('dragging-changed', onDragChange);
    return () => controls.removeEventListener('dragging-changed', onDragChange);
  });

  return (
    <React.Fragment>
      <TransformControls
        ref={transform}
        position={[2, 2, 0]}
        mode={transformMode}
      >
        <React.Fragment />
      </TransformControls>

      <OrbitControls
        args={[camera, gl.domElement]}
        enabled={isOrbitEnabled}
        enableDamping={true}
      />
    </React.Fragment>
  );
}
