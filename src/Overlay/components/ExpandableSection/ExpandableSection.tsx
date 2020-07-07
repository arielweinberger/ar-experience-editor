import React, { useState } from 'react';
import './ExpandableSection.scss';
import { Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

const ExpandableSection = ({ label, children }) => {
  const [expanded, setExpanded] = useState(true);

  const caretDirection = ('caret ' +
    (expanded ? 'down' : 'up')) as SemanticICONS;

  return (
    <div className="ExpandableSection">
      <div
        className="ExpandableSectionHeader"
        onClick={() => setExpanded(!expanded)}
      >
        <h2>{label}</h2>
        <Icon name={caretDirection} />
      </div>
      <div className={`ExpandableSectionContent ${expanded ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ExpandableSection;
