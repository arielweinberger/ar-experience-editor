import React from 'react';
import EditorCanvas from './components/EditorCanvas';
import { Canvas } from 'react-three-fiber';
import { Controls } from 'react-three-gui';
import { inject, Provider } from 'mobx-react';

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
        <Provider {...stores}>
          <EditorCanvas />
        </Provider>
      </Canvas>
      <Controls />
    </React.Fragment>
  );
}

export default inject('stores')(App);
