import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
`;

export const TopBar = styled.div`
  background: #f1f1f1;
  height: 60px;
  width: 100%;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const BottomContent = styled.div`
  width: 100%;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
`;

export const CenterContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  z-index: 0;
`;

export const LeftPanel = styled.div`
  width: 220px;
  background: #f6f7f8;
  background: #f1f1f1;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
`;

export const CenterPanel = styled.div`
  flex: 1;
  background: #D8D8D8;
`;

export const RightPanel = styled.div`
  width: 220px;
  background: #f1f1f1;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
`;