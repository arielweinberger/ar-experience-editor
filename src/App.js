import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Controls } from 'react-three-gui';
import { rootStore } from './reducers';
import { Provider } from 'react-redux';
import ExperienceCanvas from './containers/ExperienceCanvas';

function App({ stores }) {
  return (
    <React.Fragment>
      <Canvas
        camera={{
          zoom: 40,
        }}
        orthographic={true}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Provider store={rootStore}>
          <ExperienceCanvas />
        </Provider>
      </Canvas>
      <Controls />
    </React.Fragment>
  );
}

export default App;
