import { SceneState } from './types';

export const objectTranslateEnd = (state: SceneState, action) => {
  if (!state.scene) {
    return;
  }
  
  const syncedObjects = state.objects.map(object => {
    const threeObject = state.scene.getObjectByProperty('exp_sceneObjectId', object.sceneObjectId);

    const transform = {
      scale: threeObject.scale.toArray(),
      position: threeObject.position.toArray(),
      rotation: threeObject.rotation.toArray(),
    };

    return {
      ...object,
      transform,
    }
  });

  localStorage.setItem('exp_1_objects', JSON.stringify(syncedObjects));
  return { ...state, objects: syncedObjects };
};