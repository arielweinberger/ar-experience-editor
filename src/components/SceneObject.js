import React, { useRef } from 'react';
import { inject, observer } from 'mobx-react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GLTFModel from './GLTFModel';

import { useLoader } from 'react-three-fiber';

function SceneObject(props) {
  const { controlsStore } = props;

  const controlled = useRef();

  const { nodes, materials, scene } = useLoader(
    GLTFLoader,
    './models/person.gltf'
  );

  // useEffect(() => {
  //   const controls = transform.current;
  //   controls.detach();

  //   const callback = ({ value, target }) => {
  //     if (value === true) {
  //       controls.attach(box.current);
  //       controlsStore.disableOrbit();
  //     } else if (value === false) {
  //       // Transform finished
  //       controlsStore.enableOrbit();
  //       console.log('controlled scale', controls.object.scale);
  //       console.log('box', box.current.scale);
  //     }
  //   };

  //   controls.addEventListener('dragging-changed', callback);
  //   return () => controls.removeEventListener('dragging-changed', callback);
  // });

  const handleOnClick = (e) => {
    console.log('scene test');
    e.stopPropagation();
    controlsStore.setControlled(e.eventObject);
  };

  const renderModel = () => (
    <group ref={controlled} onClick={handleOnClick}>
      <GLTFModel scale={[1, 1, 1]} />
    </group>
  );

  return <React.Fragment>{renderModel()}</React.Fragment>;
}

export default inject('controlsStore')(observer(SceneObject));
