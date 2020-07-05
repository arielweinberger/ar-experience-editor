import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import GLTFModel from '../components/GLTFModel';
import SceneObject from '../components/SceneObject';

const SceneLoader = (props) => {
  const { sceneObjects } = props;

  const renderSceneObjects = () =>
    sceneObjects.map((sceneObject) => (
      <SceneObject
        key={sceneObject.sceneObjectId}
        data={sceneObject}
        render={() => <GLTFModel model={'./models/person.gltf'} />}
      />
    ));

  return <Suspense fallback={null}>{renderSceneObjects()}</Suspense>;
};

const mapStateToProps = ({ scene }) => ({
  sceneObjects: scene.objects,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SceneLoader));
