import React, { useRef } from 'react';
import * as THREE from 'three';
import { Plane } from 'drei';
import { GridHelper } from 'three';

function Surface({ scene }) {
  const gridHelper = new GridHelper(20, 20);
  scene.add(gridHelper);

  return (
    <React.Fragment />
  );
}

export default Surface;