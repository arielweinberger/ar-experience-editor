import React, { useState } from 'react';
import styled from '@emotion/styled';
import thumbSvg from './thumb.svg';
import { roundPre } from '../../../lib/util/roundPre';

const ThumbContainer = styled.div`
  position: absolute;
  height: 32px;
  z-index: 2;
`;

const Thumb = styled.div<{ time: number }>`
  height: 19px;
  width: 13px;
  position: absolute;
  top: 6px;
  transform: translate3d(${(props) => props.time + 4}px, 0px, 0px);
  background-image: url(${thumbSvg});
`;

const Guide = styled.div<{ time: number }>`
  height: 270px;
  width: 1px;
  position: absolute;
  transform: translate3d(${(props) => props.time + 10}px, 0px, 0px);
  top: 24px;
  border-style: solid;
  border-width: 0px 0px 0px 1px;
  z-index: 3;
`;

const HiddenRangeInput = styled.input`
  -webkit-font-smoothing: antialiased;
  user-select: none !important;
  box-sizing: border-box;
  -webkit-appearance: none !important;
  margin: 0px 0 0 0px;
  background-color: transparent !important;
  position: absolute;
  left: 5px;
  width: 6000px;
  height: 32px;
  cursor: pointer;

  &:active {
    border: 0 !important;
    outline: 0 !important;
  }

  &:focus {
    outline: none !important;
  }

  ::-webkit-slider-runnable-track {
    background: transparent !important;
  }

  ::-webkit-slider-thumb {
    opacity: 0 !important;
  }
`;

const Timeline = (props) => {
  const { onLocationChange } = props;
  const [time, setTime] = useState(props.time);

  const handleThumbInput = (e) => {
    const value = roundPre(e.target.value, 10);
    setTime(value);
    onLocationChange(value)
  };

  return (
    <ThumbContainer>
      <Thumb time={time} />
      <HiddenRangeInput
        type="range"
        step="1"
        min="0"
        max="6000"
        defaultValue={time}
        onChange={handleThumbInput}
      />
      <Guide time={time} />
    </ThumbContainer>
  );
};

export default Timeline;
