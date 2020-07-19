import React from 'react'
import TimelineRow from '../shared/TimelineRow';
import classNames from 'classnames';
import Keyframe from './Keyframe';
import { useControls, useContextMenu, useKeyframes } from '../../../hooks';
import { roundPre } from '../../../lib/util/roundPre';

export default function Keyframes({ sceneObjectId }) {
  const { controlledObject } = useControls();
  const { createContextMenu } = useContextMenu();
  const { keyframes, addKeyframe, deleteKeyframe } = useKeyframes(sceneObjectId);

  const renderKeyframes = () => {
    return keyframes.map(keyframe => {
      const keyframeContextMenu = e => {
        e.stopPropagation();
        const menu = [{ label: 'Delete keyframe', onClick: () => deleteKeyframe(keyframe.keyframeId)}]
        createContextMenu(menu, e);
      };

      return (
        <Keyframe
          time={keyframe.time}
          key={keyframe.keyframeId}
          onContextMenu={e => keyframeContextMenu(e)}
        />
      );
    });
  };

  const timelineContextMenu = e => {
    const rect = e.target.getBoundingClientRect();
    const time = roundPre(e.clientX - rect.left - 10, 10);
    const menu = [{ label: 'Add keyframe', onClick: () => addKeyframe(time) }];
    createContextMenu(menu, e);
  };

  const selected = controlledObject && controlledObject.exp_sceneObjectId === sceneObjectId;

  return (
    <TimelineRow className={classNames({ selected })} onContextMenu={e => timelineContextMenu(e)}>
      {renderKeyframes()}
    </TimelineRow>
  )
}
