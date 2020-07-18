import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Surface from '../components/Surface';
import { useThree, Canvas } from 'react-three-fiber';
import { registerScene } from '../../actions/scene';
import SceneLoader from './SceneLoader';
import { Provider } from 'react-redux';
import { rootStore } from '../../reducers';
import ExperienceControls from './ExperienceControls';

const CanvasContents = () => {
  const dispatch = useDispatch();
  const { objects } = useSelector(state => state.scene.present);

  const { scene } = useThree();
  dispatch(registerScene(scene));

  return (
    <React.Fragment>
      <SceneLoader sceneObjects={objects} />

      <ambientLight />
      <Surface scene={scene} />
      <axesHelper args={[10]} />
    </React.Fragment>
  );
};

export default () => {
  return (
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
};
