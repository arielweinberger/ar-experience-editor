import React from 'react';
import styled from '@emotion/styled';

const KeyframeIcon = styled.span<{ time: number }>`
  width: 12px;
  height: 12px;
  background: red;
  position: absolute;
  transform: ${props => `translate3d(${props.time}px, 0px, 0px) rotate(45deg)`};

  &:hover {
    cursor: pointer;
  }
`;

// transform: translate3d(${(props) => props.time + 4}px, 0px, 0px);

export default function Keyframe({ time, id }) {
  return (
    <KeyframeIcon time={time} />
  );
}