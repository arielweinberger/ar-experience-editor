import React from 'react';
import styled from '@emotion/styled';
import TimeDisplay from './TimeDisplay';

const SidenavContainer = styled.div`
  width: 216px;
  flex-shrink: 0;
  flex-flow: column nowrap;
  background-color: rgba(250, 250, 250, 1);
  margin-top: -30px;
`;

const List = styled.div`
  flex: 1 1 0%;
  overflow-y: auto;
  padding-bottom: 15px;
`;

const Item = styled.div`
  height: 29px;
  display: flex;
  align-items: center;
  padding: 4px;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    background: rgb(226, 237, 251);;
    border: 1px solid rgb(160, 201, 240);
    border-width: 1px 0px 1px 1px;
  }
`;

const Sidenav = () => {
  
  return (
    <SidenavContainer>
      <TimeDisplay />
      <List>
        <Item className="selected"><p>Box</p></Item>
        <Item><p>Cone</p></Item>
        <Item><p>Sphere</p></Item>
      </List>
    </SidenavContainer>
  );
};

export default Sidenav;