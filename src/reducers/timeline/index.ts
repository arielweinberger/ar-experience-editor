import { TimelineState } from './types';

const initialState = {
  selectedKeyframe: null,
  keyframes: {
    Cone_0r9dlqw1L: [
      {
        id: 'rand0',
        time: 500,
      },
      {
        id: 'rand1',
        time: 1500,
      },
    ],
  },
};

const timeline = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_KEYFRAME':
      state.selectedKeyframe = action.keyframeId;
      break;
  }

  return state;
};

export default timeline;
