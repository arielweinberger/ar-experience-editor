const initialState = {
  isOrbitEnabled: true,
  transformMode: 'scale',
};

const controls = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORBIT_ENABLED':
      return { ...state, isOrbitEnabled: action.isOrbitEnabled };
    case 'SET_TRANSFORM_MODE':
      return { ...state, transformMode: action.transformMode };
    default:
      return state;
  }
};

export default controls;