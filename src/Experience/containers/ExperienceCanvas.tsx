import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Surface from '../components/Surface';
import { useThree } from 'react-three-fiber';
import { registerScene, addBulkSceneObjects } from '../../actions/scene';
import SceneLoader from './SceneLoader';

function ExperienceCanvas(props) {
  const { registerScene } = props;
  const { scene } = useThree();
  registerScene(scene);

  return (
    <React.Fragment>
      <SceneLoader />

      <ambientLight />
      <Surface scene={scene} />
      <axesHelper args={[10]} />
    </React.Fragment>
  );
}

const mapStateToProps = ({ scene }) => ({
  sceneObjects: scene.objects,
});

const mapDispatchToProps = {
  registerScene,
  addBulkSceneObjects,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceCanvas);
