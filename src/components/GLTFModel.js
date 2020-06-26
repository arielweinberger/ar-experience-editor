import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

const GLTFModel = React.forwardRef((props, ref) => {
  const { scene } = useLoader(GLTFLoader, './models/person.gltf');

  return (
    <primitive {...props} object={scene} castShadow receiveShadow />
  );
});

export default GLTFModel;
