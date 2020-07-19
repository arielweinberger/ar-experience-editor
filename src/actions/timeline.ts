enum TimelineActions {
  SET_SELECTED_KEYFRAME = 'SET_SELECTED_KEYFRAME',
  SET_THUMB_LOCATION = 'SET_THUMB_LOCATION',
};

const setSelectedKeyframe = keyframeId => ({
  type: TimelineActions.SET_SELECTED_KEYFRAME,
  keyframeId,
});

const setThumbLocation = location => ({
  type: TimelineActions.SET_THUMB_LOCATION,
  location,
});

export default {
  setSelectedKeyframe,
  setThumbLocation
};