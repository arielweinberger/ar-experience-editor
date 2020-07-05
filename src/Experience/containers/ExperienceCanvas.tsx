import React from 'react';
import { connect } from 'react-redux';
import Surface from '../components/Surface';
import { useThree, Canvas } from 'react-three-fiber';
import { registerScene, addBulkSceneObjects } from '../../actions/scene';
import SceneLoader from './SceneLoader';
import { Provider } from 'react-redux';
import { rootStore } from '../../reducers';
import ExperienceControls from './ExperienceControls';

const mapStateToProps = ({ scene }) => ({
  sceneObjects: scene.objects,
});

const mapDispatchToProps = {
  registerScene,
  addBulkSceneObjects,
};

const CanvasContents = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
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
});

export default () => (
  <Canvas
    camera={{
      fov: 45,
      position: [-10, 10, 20],
      zoom: 1,
    }}
    className="threeCanvas"
  >
    <Provider store={rootStore}>
      <CanvasContents />
      <ExperienceControls />
    </Provider>
  </Canvas>
);
