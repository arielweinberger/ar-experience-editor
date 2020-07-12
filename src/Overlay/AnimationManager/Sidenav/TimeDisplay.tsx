import React from 'react';
import styled from '@emotion/styled';

const TimeDisplayContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0%;
  overflow: auto;
`;

const TimeDisplay = styled.div`
  height: 60px;
  flex-shrink: 0;
  background-color: rgb(246, 247, 248);
  padding: 11px 15px 9px 13px;
  position: relative;
`;

const Timeline = () => {
  return (
    <TimeDisplayContainer>
      <TimeDisplay />
    </TimeDisplayContainer>
  );
};

export default Timeline;
