const initialState = {
  isOrbitEnabled: true,
  transformMode: 'translate',
  controlledObject: null,
};

const controls = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORBIT_ENABLED':
      state.isOrbitEnabled = action.isOrbitEnabled;
      break;
    case 'SET_TRANSFORM_MODE':
      state.transformMode = action.transformMode;
      break;
    case 'SET_CONTROLLED_OBJECT':
      state.controlledObject = action.controlledObject;
  }
  
  return state;
};

export default controls;
