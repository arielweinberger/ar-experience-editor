export enum TimelineActions {
  SET_SELECTED_KEYFRAME = 'SET_SELECTED_KEYFRAME',
  SET_THUMB_LOCATION = 'SET_THUMB_LOCATION',
  ADD_KEYFRAME = 'ADD_KEYFRAME',
  DELETE_KEYFRAME = 'DELETE_KEYFRAME',
};

const setSelectedKeyframe = keyframeId => ({
  type: TimelineActions.SET_SELECTED_KEYFRAME,
  keyframeId,
});

const setThumbLocation = location => ({
  type: TimelineActions.SET_THUMB_LOCATION,
  location,
});

const addKeyframe = (sceneObjectId, time) => ({
  type: TimelineActions.ADD_KEYFRAME,
  sceneObjectId,
  time,
});

const deleteKeyframe = (sceneObjectId, keyframeId) => ({
  type: TimelineActions.DELETE_KEYFRAME,
  sceneObjectId,
  keyframeId,
});

export default {
  setSelectedKeyframe,
  setThumbLocation,
  addKeyframe,
  deleteKeyframe,
};