import { SceneState } from './types';
import { objectTranslateEnd } from './objectTranslateEnd';
import { addSceneObject } from './addSceneObject';
import { SceneActions } from '../../actions/scene';

const initialState: SceneState = {
  scene: null,
  objects: [],
};

initialState.objects = JSON.parse(window.localStorage.getItem('exp_1_objects'));

const scene = (state: SceneState = initialState, action): SceneState => {
  let newScene;

  switch(action.type) {
    case SceneActions.REGISTER_SCENE:
      return { ...state, scene: action.scene };
    case SceneActions.ADD_SCENE_OBJECT:
      newScene = addSceneObject(state, action);
      localStorage.setItem('exp_1_objects', JSON.stringify(newScene.objects));
      return newScene;
    case SceneActions.OBJECT_TRANSLATE_END:
      newScene = objectTranslateEnd(state, action);
      localStorage.setItem('exp_1_objects', JSON.stringify(newScene.objects));
      return newScene;
    default:
      return state;
  } 
};

export default scene;