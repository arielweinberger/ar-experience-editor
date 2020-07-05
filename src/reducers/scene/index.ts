import { SceneState } from './types';
import { objectTranslateEnd } from './objectTranslateEnd';
import { addSceneObject } from './addSceneObject';
import { SceneActions } from '../../actions/scene';

const initialState: SceneState = {
  scene: null,
  objects: [],
};

initialState.objects = JSON.parse(window.localStorage.getItem('exp_1_objects'));

const scene = (state: SceneState = initialState, action) => {
  switch(action.type) {
    case SceneActions.REGISTER_SCENE:
      return { ...state, scene: action.scene };
    case SceneActions.ADD_SCENE_OBJECT:
      return addSceneObject(state, action);
    case SceneActions.OBJECT_TRANSLATE_END:
      return objectTranslateEnd(state, action);
    default:
      return state;
  } 
};

export default scene;