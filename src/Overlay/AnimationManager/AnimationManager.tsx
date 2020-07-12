import React from 'react';
import styled from '@emotion/styled';
import Timeline from './Timeline';
import Scrubber from './Scrubber';
import Sidenav from './Sidenav/Sidenav';

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
      </Timeline>
    </AnimationManagerContainer>
  );
};

export default AnimationManager;
