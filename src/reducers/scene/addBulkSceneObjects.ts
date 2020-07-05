import { SceneState } from './types';
import { uniqueId } from 'lodash';

export const addBulkSceneObjects = (state: SceneState, action) => {
  const { objects } = action;

  console.log('state', state);

  const finalObjects = objects.map(obj => ({
    sceneObjectId: uniqueId(),
    name: 'Unnamed',
    model: './models/person.gltf',
    transform: obj.transform,
  }));

  return { ...state, objects: finalObjects };
};