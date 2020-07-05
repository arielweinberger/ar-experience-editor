const initialState = {
  displayModal: false,
};

const controls = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_MODAL':
      return { ...state, displayModal: action.status };
    default:
      return state;
  }
};

export default controls;