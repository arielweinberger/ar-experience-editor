import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import undoable from 'redux-undo';
import immer from 'immer';

import scene from './scene';
import controls from './controls';
import overlay from './overlay';
import timeline from './timeline';

const rootReducer = combineReducers({
  scene: undoable(immer(scene)),
  controls: immer(controls),
  overlay: immer(overlay),
  timeline: undoable(immer(timeline)),
});
const rootStore = createStore(rootReducer, composeWithDevTools());

export { rootStore };