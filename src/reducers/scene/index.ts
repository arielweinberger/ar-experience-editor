import { SceneState } from './types';
import { addSceneObject } from './addSceneObject';
import { SceneActions } from '../../actions/scene';
import { syncObjectsFromThreeToState } from './helpers';

const initialState: SceneState = {
  scene: null,
  objects: [],
};

initialState.objects = JSON.parse(window.localStorage.getItem('exp_1_objects')) || [];

const save = (state) => {
  localStorage.setItem('exp_1_objects', JSON.stringify(state.objects));
};

const scene = (state: SceneState = initialState, action) => {
  switch(action.type) {
    case SceneActions.REGISTER_SCENE:
      state.scene = action.scene;
      break;
    case SceneActions.ADD_SCENE_OBJECT:
      const obj = addSceneObject(action.objectData);
      state.objects.push(obj);
      save(state);
      break;
    case SceneActions.OBJECT_TRANSLATE_END:
      const objects = syncObjectsFromThreeToState(state);
      state.objects = objects;
      save(state);
      break;
  }

  return state;
};

export default scene;