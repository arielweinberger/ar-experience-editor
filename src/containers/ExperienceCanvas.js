import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Surface from '../components/Surface';
import { useThree } from 'react-three-fiber';
import { registerScene, addBulkSceneObjects } from '../actions/scene';
import SceneLoader from './SceneLoader';
import { PerspectiveCamera } from 'drei';

function ExperienceCanvas(props) {
  const { registerScene } = props;
  const { scene, camera } = useThree();

  console.log('cam', camera);
  
  setTimeout(() => { console.log(camera.rotation) }, 1000);

  scene.traverse(obj => obj.frustumCulled = false);
  
  useEffect(() => {
    registerScene(scene);
  });

  return (
    <React.Fragment>
      <PerspectiveCamera />
      <SceneLoader />

      <ambientLight />
      <Surface scene={scene} />
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
