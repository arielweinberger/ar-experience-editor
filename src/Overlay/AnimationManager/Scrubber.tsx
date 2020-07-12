import React from 'react';
import styled from '@emotion/styled';
import Thumb from './Thumb';

const ScrubberContainer = styled.div`
  overflow: hidden;
  height: 30px;
  flex-shrink: 0;
  width: 6000px;
  margin-left: 0px;
`;

const LabelsContainer = styled.div`
  display: flex;
  font-size: 12px;
  color: rgb(132, 143, 157);
  text-align: center;
  flex: 1 1 0%;
  position: relative;
`;

const RulerContainer = styled.div`
  display: flex;
  flex: 1 0 0%;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  z-index: 1;
  border-right: 1px solid rgb(189, 189 189);
  border-left: 1px solid rgb(189, 189 189);
`;

const Label = styled.div`
  position: relative;
  width: 50px;
  left: -15px;
`;

const Timeline = () => {
  const generateLabels = () => {
    let labels = [];

    for(let i = 0; i < 120; i = i + 0.5) {
      labels.push(<Label key={i}>{i}</Label>);
    }

    return labels;
  };

  return (
    <ScrubberContainer>
      <Thumb time={100} />
      <RulerContainer>
        <LabelsContainer>
          {generateLabels()}
        </LabelsContainer>
      </RulerContainer>
    </ScrubberContainer>
  );
};

export default Timeline;
