import React from 'react';
import { Canvas } from 'react-three-fiber';
import { rootStore } from './reducers';
import { Provider } from 'react-redux';
import ExperienceCanvas from './containers/ExperienceCanvas';
import ExperienceControls from './containers/ExperienceControls';
import { Overlay } from './containers/Overlay/Overlay';

function App({ stores }) {
  return (
    <React.Fragment>
      <Overlay />
      <Canvas
        camera={{
          fov: 45,
          position: [-10, 10, 20],
          zoom: 1,
        }}
      >
        <Provider store={rootStore}>
          <ExperienceCanvas />
          <ExperienceControls />
        </Provider>
      </Canvas>
    </React.Fragment>
  );
}

export default App;
