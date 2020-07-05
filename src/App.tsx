import React from 'react';
import { Canvas } from 'react-three-fiber';
import { rootStore } from './reducers';
import { Provider } from 'react-redux';
import ExperienceCanvas from './Experience/containers/ExperienceCanvas';
import ExperienceControls from './Experience/containers/ExperienceControls';
import { Overlay } from './Overlay/Overlay';

function App() {
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
