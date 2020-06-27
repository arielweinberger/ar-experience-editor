import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Surface from '../components/Surface';
import { useThree } from 'react-three-fiber';
import SaveService from '../services/SaveService';
import { registerScene, addBulkSceneObjects } from '../actions/scene';
import SceneLoader from './SceneLoader';

function ExperienceCanvas(props) {
  const { registerScene } = props;
  const { scene } = useThree();

  
  // SaveService.registerScene(scene);
  
  useEffect(() => {
    registerScene(scene);
    // const loaded = SaveService.load();

    // if (loaded) {
      // props.addBulkSceneObjects(loaded.objects);
    // }
  });

  return (
    <React.Fragment>
      <SceneLoader />

      {/* Base */}
      <ambientLight />
      <Surface position={[0, 0, 0]} />
      <axesHelper args={[10]} />
    </React.Fragment>
  );
}

const mapStateToProps = ({ controls, scene }) => ({
  // sceneObjects: scene.objects,
});

const mapDispatchToProps = {
  registerScene,
  addBulkSceneObjects,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceCanvas);
