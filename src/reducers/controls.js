const initialState = {
  isOrbitEnabled: true,
  transformMode: 'translate',
  controlledObject: null,
};

const controls = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORBIT_ENABLED':
      return { ...state, isOrbitEnabled: action.isOrbitEnabled };
    case 'SET_TRANSFORM_MODE':
      return { ...state, transformMode: action.transformMode };
    case 'SET_CONTROLLED_OBJECT':
      return { ...state, controlledObject: action.controlledObject };
    default:
      return state;
  }
};

export default controls;