import { SceneState, ThreeObjectProperties, PrimitiveSceneObject } from './types';
import { Vector3, Euler } from 'three';
import shortid from 'shortid';

export interface AddPrimitiveSceneObjectData {
  type: 'primitive';
  subtype: string;
  threeProperties?: ThreeObjectProperties;
};

// Currently ONLY PRIMITIVES
export const addSceneObject = (objectData: AddPrimitiveSceneObjectData) => {
  const { type, subtype } = objectData;

  const sceneObjectId = shortid();
  
  const threeProperties = {
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Euler(0, 0, 0, 'XYZ'),
  };

  const obj: PrimitiveSceneObject = {
    name: `${subtype}_${sceneObjectId}`,
    sceneObjectId,
    type,
    subtype,
    threeProperties,
  };

  return obj;
};