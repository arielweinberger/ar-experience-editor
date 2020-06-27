import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import random from 'random';

const GLTFModel = (props, ref) => {
  const { scene } = useLoader(GLTFLoader, `${props.model}?hash=${random.int(0, 100)}`);

  return (
    <primitive {...props} object={scene} castShadow receiveShadow />
  );
};

export default GLTFModel;
