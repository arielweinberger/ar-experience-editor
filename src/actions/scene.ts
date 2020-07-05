
export const registerScene = scene => ({
  type: 'REGISTER_SCENE',
  scene,
});

export const registerObjectReference = object => ({
  type: 'REGISTER_OBJECT_REFERENCE',
  object,
});

export const objectTranslateEnd = object => ({
  type: 'OBJECT_TRANSLATE_END',
  object,
});

export const addSceneObject = objectData => ({
  type: 'ADD_SCENE_OBJECT',
  objectData,
});

export const addBulkSceneObjects = objects => ({
  type: 'ADD_BULK_SCENE_OBJECTS',
  objects,
});