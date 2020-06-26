import React, { useRef, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import GLTFModel from './GLTFModel';

function SceneObject(props) {
  // const { controlsStore, sceneStore } = props;

  const obj = useRef();

  const handleOnClick = (e) => {
    e.stopPropagation();
    // controlsStore.setControlled(e.eventObject);
  };

  useEffect(() => {
    if (obj.current) {
      // sceneStore.registerObject(obj.current);
    }
  });

  const renderModel = () => (
    <group {...props} ref={obj} onClick={handleOnClick}>
      <GLTFModel onUpdate={() => console.log('GLTF update')} />
    </group>
  );

  return <React.Fragment>{renderModel()}</React.Fragment>;
}

export default SceneObject;
