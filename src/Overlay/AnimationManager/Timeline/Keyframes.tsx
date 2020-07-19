import React from 'react'
import styled from '@emotion/styled';
import TimelineRow from '../shared/TimelineRow';
import classNames from 'classnames';
import Keyframe from './Keyframe';
import { useControls, useTimeline, useScene } from '../../../hooks/experienceHooks';

const KeyframesContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-flow: column nowrap;
  flex: 1 1 0%;
  padding-bottom: 15px;
`;

export default function Keyframes() {
  const { objects } = useScene();
  const { controlledObject } = useControls();
  const { keyframes } = useTimeline();

  const renderTimelineRows = () =>
    objects.map((object) => {
      let className = '';

      const sceneObjectId = object.sceneObjectId;

      if (controlledObject) {
        className = classNames({ selected: sceneObjectId === controlledObject.exp_sceneObjectId });
      }

      const objectKeyframes = keyframes[object.name];

      if (!objectKeyframes) {
        return null;
      }

      const renderKeyframes = () => objectKeyframes.map(keyframe => <Keyframe time={keyframe.time} id={keyframe.id} key={keyframe.id} />);

      return (
        <TimelineRow
          key={sceneObjectId}
          className={className}
        >
          {renderKeyframes()}
        </TimelineRow>
      );
    });

  return (
    <KeyframesContainer>
      {renderTimelineRows()}
    </KeyframesContainer>
  )
}
