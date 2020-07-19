import styled from '@emotion/styled';

const TimelineRow = styled.div`
  height: 29px;
  display: flex;
  align-items: center;
  padding: 4px;

  &:hover {
    /* cursor: pointer; */
  }

  &.selected {
    background: rgb(226, 237, 251);
    border: 1px solid rgb(160, 201, 240);
    border-width: 1px 0px 1px 1px;
  }
`;

export default TimelineRow;