import React from 'react';
import { GridHelper } from 'three';
import { useThree } from 'react-three-fiber';

function Surface() {
  const { scene } = useThree();

  const gridHelper = new GridHelper(20, 20);
  scene.add(gridHelper);

  return (
    <React.Fragment />
  );
}

export default Surface;