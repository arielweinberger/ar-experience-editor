import { SceneState } from './types';
import { syncObjectsFromThreeToState } from './helpers';

export const objectTranslateEnd = (state: SceneState, action): SceneState => {
  if (!state.scene) {
    return;
  }
  
  const objects = syncObjectsFromThreeToState(state);
  return { ...state, objects };
};