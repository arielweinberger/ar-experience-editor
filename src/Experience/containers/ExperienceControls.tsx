import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TransformControls, OrbitControls } from 'drei'
import { setOrbitEnabled } from '../../actions/controls';
import { objectTranslateEnd } from '../../actions/scene';
import { useThree } from 'react-three-fiber';
import { Euler } from 'three';

export default function ExperienceControls() {
  const { isOrbitEnabled, transformMode, controlledObject } = useSelector(state => state.controls);
  const dispatch = useDispatch();

  const { camera, gl } = useThree();
  const transform = useRef();

  const onDragChange = e => {
    dispatch(setOrbitEnabled(!e.value));

    if (!e.value) {
      controlledObject.dispatchEvent({ type: 'change' });
      dispatch(objectTranslateEnd(controlledObject));
    }
  };

  useEffect(() => {
    const euler = new Euler(-0.444145, -0.731450, -0.307748, 'XYZ');
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
        position={[2,2,0]}
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