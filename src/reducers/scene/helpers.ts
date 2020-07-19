import { SceneState, SceneObject } from './types';

export function syncThreeObjectToState(threeObject, state: SceneState) {
  console.log(threeObject);

  const sceneObjects = state.objects;
  console.log('sceneObjects', sceneObjects);

  const relevantObject: any = sceneObjects.filter(obj => obj.sceneObjectId = threeObject.exp_sceneObjectId);

  relevantObject.threeProperties = {
    scale: threeObject.scale,
    position: threeObject.position,
    rotation: threeObject.rotation,
  };
}