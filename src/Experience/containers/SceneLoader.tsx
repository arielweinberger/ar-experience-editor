import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import SceneObject from '../components/SceneObject';
import * as drei from 'drei';
import { Object3D } from 'three';

const SceneLoader = (props) => {
  const { sceneObjects } = props;

  console.log('SceneLoader rendering');

  const renderSceneObjects = () =>
    sceneObjects.map((sceneObject) => {
      const primitiveComponent = React.cloneElement(React.createElement<Object3D>(drei[sceneObject.subtype]), {});

      // console.log('sceneObject', sceneObject);

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

const mapStateToProps = ({ scene }) => ({
  sceneObjects: scene.objects,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(SceneLoader));
