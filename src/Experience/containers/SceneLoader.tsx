import React, { Suspense } from 'react';
import SceneObject from '../components/SceneObject';
import * as drei from 'drei';
import { Object3D } from 'three';
import { useScene } from '../../hooks';

const SceneLoader = () => {
  const { objects } = useScene();

  const renderSceneObjects = () =>
    objects.map((sceneObject) => {
      const primitiveComponent = React.cloneElement(
        React.createElement<Object3D>(drei[sceneObject.subtype]),
        {}
      );

      return (
        <SceneObject
          key={sceneObject.sceneObjectId}
          data={sceneObject}
          render={() => primitiveComponent}
        />
      );
    });

  return <Suspense fallback={null}>{renderSceneObjects()}</Suspense>;
};

export default SceneLoader;