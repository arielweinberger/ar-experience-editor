import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import scene from './scene';
import controls from './controls';

const rootReducer = combineReducers({ scene, controls });
const rootStore = createStore(rootReducer, composeWithDevTools());

export { rootStore };