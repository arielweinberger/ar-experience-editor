import { SceneState } from './types';
import { objectTranslateEnd } from './objectTranslateEnd';
import { addBulkSceneObjects } from './addBulkSceneObjects';
import { addSceneObject } from './addSceneObject';

const initialState: SceneState = {
  scene: null,
  objects: [],
};

const scene = (state: SceneState = initialState, action) => {
  switch(action.type) {
    case 'REGISTER_SCENE':
      return { ...state, scene: action.scene };
    case 'ADD_SCENE_OBJECT':
      return addSceneObject(state, action);
    case 'ADD_BULK_SCENE_OBJECTS':
      return addBulkSceneObjects(state, action);
    case 'OBJECT_TRANSLATE_END':
      return objectTranslateEnd(state, action);
    default:
      return state;
  } 
};

export default scene;