import React from 'react';
import styled from '@emotion/styled';

const KeyframeIcon = styled.span<{ time: number }>`
  width: 12px;
  height: 12px;
  background: #EDB24B;
  position: absolute;
  transform: ${props => `translate3d(${props.time}px, 0px, 0px) rotate(45deg)`};

  &:hover {
    cursor: pointer;
  }
`;

export default function Keyframe({ time, onContextMenu }) {
  return (
    <KeyframeIcon time={time} onContextMenu={onContextMenu} />
  );
}