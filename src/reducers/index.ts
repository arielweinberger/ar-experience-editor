import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import scene from './scene';
import controls from './controls';
import overlay from './overlay';

const rootReducer = combineReducers({ scene, controls, overlay });
const rootStore = createStore(rootReducer, composeWithDevTools());

export { rootStore };