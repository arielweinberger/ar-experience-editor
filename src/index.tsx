import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { rootStore } from './reducers';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);