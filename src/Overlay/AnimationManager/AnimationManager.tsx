import React from 'react';
import styled from '@emotion/styled';
import Timeline from './Timeline/Timeline';
import Scrubber from './Timeline/Scrubber';
import Sidenav from './Sidenav/Sidenav';
import Keyframes from './Timeline/Keyframes';
import { useScene } from '../../hooks';

const AnimationManagerContainer = styled.div`
  min-height: 170px;
  display: flex;
  transition: height 250ms;
`;

const KeyframesContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-flow: column nowrap;
  flex: 1 1 0%;
  padding-bottom: 15px;
`;

const AnimationManager = () => {
  const { objects } = useScene();

  return (
    <AnimationManagerContainer>
      <Sidenav />
      <Timeline>
        <Scrubber />
        <KeyframesContainer>
          {objects.map(obj => <Keyframes key={obj.sceneObjectId} sceneObjectId={obj.sceneObjectId} />)}
        </KeyframesContainer>
      </Timeline>
    </AnimationManagerContainer>
  );
};

export default AnimationManager;
