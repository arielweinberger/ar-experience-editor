import { useSelector, useDispatch } from 'react-redux';
import OverlayActions from '../actions/overlay';

export default function useContextMenu() {
  const contextMenu = useSelector(state => state.overlay.contextMenu);
  const contextMenuPosition = useSelector(state => state.overlay.contextMenuPosition)
  const dispatch = useDispatch();

  const createContextMenu = (menu, e) => {
    e.preventDefault();
    const position = { x: e.clientX, y: e.clientY };
    dispatch(OverlayActions.setContextMenu(menu, position));
  };

  const closeContextMenu = () => {
    dispatch(OverlayActions.closeContextMenu());
  };

  return {
    contextMenu,
    contextMenuPosition,
    closeContextMenu,
    createContextMenu,
  };
}