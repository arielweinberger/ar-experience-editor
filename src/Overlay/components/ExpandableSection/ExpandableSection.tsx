import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import styled from '@emotion/styled';

const Header = styled.div`
  background: #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  h2 {
    font-size: 14px;
    margin: 0;
    flex: 1;
  }

  .icon {
    float: right;
    width: 30px;
    line-height: 1;
  }
`;

const Content = styled.div<{ visible: boolean }>`
  padding: 4px;
  display: ${(props) => props.visible ? 'block' : 'none'};
`;

const ExpandableSection = ({ label, children }) => {
  const [expanded, setExpanded] = useState(true);

  const caretDirection = ('caret ' +
    (expanded ? 'down' : 'up')) as SemanticICONS;

  return (
    <React.Fragment>
      <Header onClick={() => setExpanded(!expanded)}>
        <h2>{label}</h2>
        <Icon name={caretDirection} />
      </Header>
      <Content visible={!!expanded}>
        {children}
      </Content>
    </React.Fragment>
  );
};

export default ExpandableSection;
