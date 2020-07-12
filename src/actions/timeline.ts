enum TimelineActions {
  SET_SELECTED_KEYFRAME = 'SET_SELECTED_KEYFRAME',
};

const setSelectedKeyframe = keyframeId => ({
  type: TimelineActions.SET_SELECTED_KEYFRAME,
  keyframeId,
});

export default {
  setSelectedKeyframe,
};