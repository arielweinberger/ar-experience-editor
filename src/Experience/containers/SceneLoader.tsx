import React, { Suspense } from 'react';
import { connect } from 'react-redux';
// import GLTFModel from '../components/GLTFModel';
import SceneObject from '../components/SceneObject';
import * as drei from 'drei';
import { Object3D } from 'three';

const SceneLoader = (props) => {
  const { sceneObjects } = props;

  const renderSceneObjects = () =>
    sceneObjects.map((sceneObject) => {
      const primitiveComponent = React.cloneElement(React.createElement<Object3D>(drei[sceneObject.subtype]), {});

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
