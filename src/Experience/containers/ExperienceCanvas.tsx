import React from 'react';
import { useDispatch } from 'react-redux';
import Surface from '../components/Surface';
import { useThree, Canvas } from 'react-three-fiber';
import SceneLoader from './SceneLoader';
import { Provider } from 'react-redux';
import { rootStore } from '../../reducers';
import ExperienceControls from './ExperienceControls';
import SceneActions from '../../actions/scene';

const CanvasContents = React.memo(() => {
  const { scene } = useThree();
  const dispatch = useDispatch();

  dispatch(SceneActions.registerScene(scene))

  return (
    <React.Fragment>
      <SceneLoader />

      <ambientLight />
      <Surface />
      <axesHelper args={[10]} />
    </React.Fragment>
  );
});

export default React.memo(() => {
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
});
