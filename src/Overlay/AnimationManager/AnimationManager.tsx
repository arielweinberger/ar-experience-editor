import React from 'react';
import styled from '@emotion/styled';
import Timeline from './Timeline/Timeline';
import Scrubber from './Timeline/Scrubber';
import Sidenav from './Sidenav/Sidenav';
import Keyframes from './Timeline/Keyframes';

const AnimationManagerContainer = styled.div`
  min-height: 170px;
  display: flex;
  transition: height 250ms;
`;

const AnimationManager = () => {
  return (
    <AnimationManagerContainer>
      <Sidenav />
      <Timeline>
        <Scrubber />
        <Keyframes />
      </Timeline>
    </AnimationManagerContainer>
  );
};

export default AnimationManager;
