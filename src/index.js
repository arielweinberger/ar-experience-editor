import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import './index.css';
import App from './App';
import RootStore from './stores/RootStore';
import { Provider } from 'mobx-react';

const rootStore = new RootStore();
const stores = {
  rootStore,
  controlsStore: rootStore.controlsStore,
};

ReactDOM.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);