import { SceneState } from './types';
import { syncObjectsFromThreeToState } from './helpers';

export const objectTranslateEnd = (state: SceneState, action): SceneState => {
  if (!state.scene) {
    return;
  }
  
  const syncedObjects = syncObjectsFromThreeToState(state);

  localStorage.setItem('exp_1_objects', JSON.stringify(syncedObjects));
  return { ...state, objects: syncedObjects };
};