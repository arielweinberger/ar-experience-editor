export const setOrbitEnabled = isOrbitEnabled => ({
  type: 'SET_ORBIT_ENABLED',
  isOrbitEnabled,
});

export const setTransformMode = transformMode => ({
  type: 'SET_TRANSFORM_MODE',
  transformMode,
});

export const setControlledObject = controlledObject => ({
  type: 'SET_CONTROLLED_OBJECT',
  controlledObject,
});

export default {
  setOrbitEnabled,
  setTransformMode,
  setControlledObject,
}