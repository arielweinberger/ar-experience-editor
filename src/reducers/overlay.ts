import { OverlayActions } from '../actions/overlay';

const initialState = {
  displayModal: false,
  contextMenu: null,
  contextMenuPosition: { x: 0, y: 0 },
};

const overlay = (state = initialState, action) => {
  switch (action.type) {
    case OverlayActions.SET_CONTEXT_MENU:
      state.contextMenu = action.contextMenu;
      state.contextMenuPosition.x = action.position.x;
      state.contextMenuPosition.y = action.position.y;
      break;
    case OverlayActions.CLOSE_CONTEXT_MENU:
      state.contextMenu = null;
      state.contextMenuPosition.x = 0;
      state.contextMenuPosition.y = 0;
      break;
    default:
      break;
  }

  return state;
};

export default overlay;