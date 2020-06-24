import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useThree } from 'react-three-fiber';
import { useControl } from 'react-three-gui';
import Surface from './Surface.js';
import { OrbitControls, Box, TransformControls } from 'drei';
import GLTFModel from './GLTFModel';
import SceneObject from './SceneObject.js';
import { inject } from 'mobx-react';

function EditorCanvas(props) {
  const { controlsStore } = props;

  const orbit = useRef();
  const transform = useRef();
  const surface = useRef();

  const mode = useControl('mode', {
    type: 'select',
    items: ['scale', 'rotate', 'translate'],
  });

  useEffect(() => {
    if (orbit.current) {
      controlsStore.registerOrbitControls(orbit.current);
    }

    if (transform.current) {
      const controls = transform.current
      console.log('transform', controls);
      controlsStore.registerTransformControls(controls);
      controls.setMode(mode)
      const callback = e => {
        orbit.current.enabled = !e.value;
      };
      controls.addEventListener("dragging-changed", callback)
      return () => controls.removeEventListener("dragging-changed", callback)
    }

    if (surface.current) {
      console.log('surface current');
    }
  });

  const handleSurfaceClick = (e) => {
    console.log('e', e);
    controlsStore.unsetControlled();
  };

  return (
    <React.Fragment>
      <TransformControls ref={transform} mode="rotate"></TransformControls>
      <axesHelper args={[10]} />

      <ambientLight />
      <Surface onClick={handleSurfaceClick} position={[0, 0, 0]} />

      <Suspense fallback={null}>
        <SceneObject scale={[1, 1, 1]} />
      </Suspense>
      <OrbitControls enableDamping={true} ref={orbit} />
    </React.Fragment>
  );
}

export default inject('controlsStore')(EditorCanvas);
