import { useSelector, useDispatch } from 'react-redux';
import SceneActions from '../actions/scene';

export default function useKeyframes(sceneObjectId: string) {
  const object = useSelector(state => state.scene.present.objects.find(obj => obj.sceneObjectId === sceneObjectId));
  const dispatch = useDispatch();

  return {
    keyframes: object.keyframes,
    addKeyframe: time => dispatch(SceneActions.addObjectKeyframe(sceneObjectId, time)),
    deleteKeyframe: keyframeId => dispatch(SceneActions.deleteObjectKeyframe(sceneObjectId, keyframeId)),
  };
}