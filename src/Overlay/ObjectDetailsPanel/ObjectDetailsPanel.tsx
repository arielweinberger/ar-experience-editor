import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpandableSection from '../components/ExpandableSection/ExpandableSection';
import TransformDetails from './TransformDetails/TransformDetails';
import { objectTranslateEnd } from '../../actions/scene';
import styled from '@emotion/styled';

const ObjectDetailsPanelContainer = styled.div`
  h1 {
    margin: 0;
    text-align: center;
    padding: 10px;
    font-size: 20px;
  }
`;

export default function ObjectDetailsPanel() {
  const { controlledObject } = useSelector(state => state.controls);
  const dispatch = useDispatch();

  const renderControlledObject = () => {
    if (!controlledObject) {
      return null;
    }

    const { name } = controlledObject;

    return (
      <React.Fragment>
        <h1>{name}</h1>

        <ExpandableSection label="Transform">
          <TransformDetails object={controlledObject} onTransformChange={() => dispatch(objectTranslateEnd(controlledObject))} />
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
