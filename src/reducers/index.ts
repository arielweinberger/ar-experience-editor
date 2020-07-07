import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import undoable from 'redux-undo';

import scene from './scene';
import controls from './controls';
import overlay from './overlay';

const rootReducer = combineReducers({
  scene: undoable(scene),
  controls,
  overlay
});
const rootStore = createStore(rootReducer, composeWithDevTools());

export { rootStore };