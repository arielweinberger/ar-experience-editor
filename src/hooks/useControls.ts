import { useSelector, useDispatch } from 'react-redux';
import ControlsActions from '../actions/controls';

export default function useControls() {
  const controls = useSelector(state => state.controls);
  const dispatch = useDispatch();

  return {
    controlledObject: controls.controlledObject,
    setTransformMode: (mode) => dispatch(ControlsActions.setTransformMode(mode)),
  };
}