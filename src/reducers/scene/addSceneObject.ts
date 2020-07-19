import { ThreeObjectProperties } from './types';
import { PrimitiveSceneObject } from './lib/PrimitiveSceneObject';
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

  const primitiveObject = new PrimitiveSceneObject(`${subtype}_${sceneObjectId}`, subtype);
  primitiveObject.sceneObjectId = sceneObjectId;
  primitiveObject.type = type;
  primitiveObject.threeProperties = threeProperties;

  return primitiveObject;
};