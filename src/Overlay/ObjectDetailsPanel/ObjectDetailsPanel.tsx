import React from 'react';
import './ObjectDetailsPanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import ExpandableSection from '../components/ExpandableSection/ExpandableSection';
import TransformDetails from './TransformDetails/TransformDetails';
import { objectTranslateEnd } from '../../actions/scene';

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
    <div className="ObjectDetailsPanelContainer">
      {renderControlledObject()}
    </div>
  );
};
