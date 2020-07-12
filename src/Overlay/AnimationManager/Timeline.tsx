import React from 'react'
import styled from '@emotion/styled';

const TimelineContainer = styled.div`
  flex: 1 1 0%;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgb(236, 238, 241);
  position: relative;
`;

const Timeline = ({ children }) => {
  return (
    <TimelineContainer>
      {children}
    </TimelineContainer>
  )
}

export default Timeline
