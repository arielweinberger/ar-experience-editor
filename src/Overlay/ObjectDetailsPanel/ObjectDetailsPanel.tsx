import React from 'react';
import ExpandableSection from '../components/ExpandableSection/ExpandableSection';
import TransformDetails from './TransformDetails/TransformDetails';
import styled from '@emotion/styled';
import { useControls, useScene } from '../../hooks/experienceHooks';

const ObjectDetailsPanelContainer = styled.div`
  h1 {
    margin: 0;
    text-align: center;
    padding: 10px;
    font-size: 20px;
  }
`;

export default function ObjectDetailsPanel() {
  const { controlledObject } = useControls();
  const { objectTranslateEnd } = useScene();

  const renderControlledObject = () => {
    if (!controlledObject) {
      return null;
    }

    const { name } = controlledObject;

    return (
      <React.Fragment>
        <h1>{name}</h1>

        <ExpandableSection label="Transform">
          <TransformDetails object={controlledObject} onTransformChange={objectTranslateEnd} />
        </ExpandableSection>
      </React.Fragment>
    );
  };

  return (
    <ObjectDetailsPanelContainer>
      {renderControlledObject()}
    </ObjectDetailsPanelContainer>
  );
};
