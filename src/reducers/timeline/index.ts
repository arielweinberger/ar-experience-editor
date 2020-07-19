import { TimelineActions } from '../../actions/timeline';
import shortid from 'shortid';

const initialState = {
  selectedKeyframe: null,
  thumbLocation: 0,
  keyframes: {},
};

const timeline = (state = initialState, action) => {
  switch (action.type) {
    case TimelineActions.SET_SELECTED_KEYFRAME:
      state.selectedKeyframe = action.keyframeId;
      break;

    case TimelineActions.SET_THUMB_LOCATION:
      const { location } = action;
      state.thumbLocation = location;
      break;

    case TimelineActions.ADD_KEYFRAME:
      if (!state.keyframes[action.sceneObjectId]) {
        state.keyframes[action.sceneObjectId] = [];
      }

      const keyframe = { id: shortid(), time: action.time };
      state.keyframes[action.sceneObjectId].push(keyframe);
      break;

    case TimelineActions.DELETE_KEYFRAME:
      let keyframes = state.keyframes[action.sceneObjectId];
      keyframes = keyframes.filter(keyframe => keyframe.id !== action.keyframeId);

      if (!keyframes.length) {
        console.log('deleting');
        delete state.keyframes[action.sceneObjectId];
      }

      break;
  }

  return state;
};

export default timeline;
