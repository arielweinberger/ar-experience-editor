import { SceneState, SceneObject } from './types';

export function syncObjectsFromThreeToState(state: SceneState) {
  const syncedObjects = state.objects.map(object => {
    const threeObject = state.scene.getObjectByProperty('exp_sceneObjectId', object.sceneObjectId);

    const threeProperties = {
      scale: threeObject.scale,
      position: threeObject.position,
      rotation: threeObject.rotation,
    };

    return {
      ...object,
      threeProperties,
    }
  });

  return syncedObjects;
}