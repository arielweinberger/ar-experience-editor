export enum OverlayActions {
  SET_CONTEXT_MENU = 'SET_CONTEXT_MENU',
  CLOSE_CONTEXT_MENU = 'CLOSE_CONTEXT_MENU',
  SET_CONTEXT_MENU_POSITION = 'SET_CONTEXT_MENU_POSITION',
};

const setContextMenu = (contextMenu, position) => ({ type: OverlayActions.SET_CONTEXT_MENU, contextMenu, position });
const closeContextMenu = () => ({ type: OverlayActions.CLOSE_CONTEXT_MENU });

export default {
  setContextMenu,
  closeContextMenu,
}