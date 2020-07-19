import { AddPrimitiveSceneObjectData } from '../reducers/scene/addSceneObject';

export enum SceneActions {
  REGISTER_SCENE = 'REGISTER_SCENE',
  OBJECT_TRANSLATE_END = 'OBJECT_TRANSLATE_END',
  OBJECT_MANUAL_EDIT = 'OBJECT_MANUAL_EDIT',
  ADD_SCENE_OBJECT = 'ADD_SCENE_OBJECT',
  ADD_OBJECT_KEYFRAME = 'ADD_OBJECT_KEYFRAME',
  DELETE_OBJECT_KEYFRAME = 'DELETE_OBJECT_KEYFRAME',
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

export const addObjectKeyframe = (sceneObjectId, time) => ({
  type: SceneActions.ADD_OBJECT_KEYFRAME,
  sceneObjectId,
  time,
});

export const deleteObjectKeyframe = (sceneObjectId, keyframeId) => ({
  type: SceneActions.DELETE_OBJECT_KEYFRAME,
  sceneObjectId,
  keyframeId,
});

export default {
  registerScene,
  objectTranslateEnd,
  addSceneObject,
  addObjectKeyframe,
  deleteObjectKeyframe,
};