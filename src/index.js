import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { rootStore } from './reducers';

// const rootStore = new RootStore();
// const stores = {
//   rootStore,
//   controlsStore: rootStore.controlsStore,
//   sceneStore: rootStore.sceneStore,
// };

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);