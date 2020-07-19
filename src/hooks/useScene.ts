import { useSelector, useDispatch } from 'react-redux';
import SceneActions from '../actions/scene';

export default function useScene() {
  const scene = useSelector(state => state.scene.present);
  const dispatch = useDispatch();

  const registerScene = (newScene) => {
    dispatch(SceneActions.registerScene(newScene));
  };

  return {
    registerScene,
    addSceneObject: (objectData) => dispatch(SceneActions.addSceneObject(objectData)),
    objects: scene.objects,
    objectTranslateEnd: (object) => dispatch(SceneActions.objectTranslateEnd(object)),
  };
}