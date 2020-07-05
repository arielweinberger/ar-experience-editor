export const setOrbitEnabled = status => ({
  type: 'SET_MODAL_DISPLAY',
  status,
});

export const setTransformMode = transformMode => ({
  type: 'SET_TRANSFORM_MODE',
  transformMode,
});

export const setControlledObject = controlledObject => ({
  type: 'SET_CONTROLLED_OBJECT',
  controlledObject,
});