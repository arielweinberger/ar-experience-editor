import { TimelineState } from './types';

const initialState = {
  selectedKeyframe: null,
  thumbLocation: 0,
  keyframes: {
    Cylinder_2JbJ8abwJ: [
      {
        id: 'rand0',
        time: 50,
      },
      {
        id: 'rand1',
        time: 100,
      },
    ],
  },
};

const timeline = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_KEYFRAME':
      state.selectedKeyframe = action.keyframeId;
      break;

    case 'SET_THUMB_LOCATION':
      state.thumbLocation = action.location;
  }

  return state;
};

export default timeline;
