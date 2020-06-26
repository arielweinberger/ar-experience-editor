import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import objects from './objects';
import controls from './controls';

const rootReducer = combineReducers({ objects, controls });
const rootStore = createStore(rootReducer, composeWithDevTools());

export { rootStore };