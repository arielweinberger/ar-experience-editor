import { AddPrimitiveSceneObjectData } from '../reducers/scene/addSceneObject';

export enum SceneActions {
  REGISTER_SCENE = 'REGISTER_SCENE',
  OBJECT_TRANSLATE_END = 'OBJECT_TRANSLATE_NED',
  ADD_SCENE_OBJECT = 'ADD_SCENE_OBJECT',
  ADD_BULK_SCENE_OBJECTS = 'ADD_BULK_SCENE_OBJECTS',
};

export const registerScene = scene => ({
  type: SceneActions.REGISTER_SCENE,
  scene,
});

export const objectTranslateEnd = object => ({
  type: SceneActions.OBJECT_TRANSLATE_END,
  object,
});

export const addSceneObject = (objectData: AddPrimitiveSceneObjectData) => ({
  type: SceneActions.ADD_SCENE_OBJECT,
  objectData,
});

export const addBulkSceneObjects = objects => ({
  type: SceneActions.ADD_BULK_SCENE_OBJECTS,
  objects,
});