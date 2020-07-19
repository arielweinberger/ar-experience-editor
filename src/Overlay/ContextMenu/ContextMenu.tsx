import React from 'react';
import styled from '@emotion/styled';
import { useContextMenu } from '../../hooks';

const ContextMenuContainer = styled.div`
  position: absolute;
  background: #000;
  color: white;
  z-index: 101;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const MenuItem = styled.div`
  color: #fff;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default function ContextMenu() {
  const {
    contextMenu,
    contextMenuPosition,
    closeContextMenu,
  } = useContextMenu();

  const renderMenu = () => {
    if (!contextMenu) {
      return null;
    }

    return contextMenu.map((item, idx) => (
      <MenuItem key={idx} onClick={item.onClick}>
        {item.label}
      </MenuItem>
    ));
  };

  return (
    <Backdrop
      style={{ display: contextMenu ? 'block' : 'none' }}
      onClick={closeContextMenu}
      onContextMenu={(e) => e.preventDefault()}
    >
      <ContextMenuContainer
        style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
      >
        {renderMenu()}
      </ContextMenuContainer>
    </Backdrop>
  );
}
