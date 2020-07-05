import { SceneState } from './types';

export const addSceneObject = (state: SceneState, action) => {
  const { transform } = action;

  const object = {
    name: 'Unnamed',
    model: './models/person.gltf',
    transform,
  };

  return {
    ...state,
    objects: [
      ...state.objects,
      object,
    ],
  };
};