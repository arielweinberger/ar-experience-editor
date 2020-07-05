import { SceneState, SceneObjectTransform, PrimitiveSceneObject } from './types';
import { Vector3, Euler } from 'three';
import shortid from 'shortid';

export interface AddPrimitiveSceneObjectData {
  type: 'primitive';
  subtype: string;
  transform?: SceneObjectTransform;
};

// Currently ONLY PRIMITIVES
export const addSceneObject = (state: SceneState, action: { objectData: AddPrimitiveSceneObjectData }) => {
  const { type, subtype } = action.objectData;

  const sceneObjectId = shortid();
  const transform = {
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Euler(0, 0, 0, 'XYZ'),
  };

  const obj: PrimitiveSceneObject = {
    name: `${subtype}_${sceneObjectId}`,
    sceneObjectId,
    type,
    subtype,
    transform,
  };

  return {
    ...state,
    objects: [
      ...state.objects,
      obj,
    ],
  };

  // const object = {
  //   name: 'Unnamed',
  //   model: './models/person.gltf',
  //   transform,
  // };

  // return {
  //   ...state,
  //   objects: [
  //     ...state.objects,
  //     object,
  //   ],
  // };
};