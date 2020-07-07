import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './ObjectDetailsPanel.scss';
import ExpandableSection from '../components/ExpandableSection/ExpandableSection';
import TransformDetails from './TransformDetails/TransformDetails';

const ObjectDetailsPanel = (props) => {
  const { controlledObject } = props;

  const renderControlledObject = () => {
    if (!controlledObject) {
      return null;
    }

    const { name } = controlledObject;

    return (
      <React.Fragment>
        <h1>{name}</h1>

        <ExpandableSection label="Transform">
          <TransformDetails object={controlledObject} />
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

const mapStateToProps = ({ controls, scene }) => {
  const { controlledObject } = controls;
  const { objects } = scene;

  return {
    controlledObject,
    sceneObjects: objects,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ObjectDetailsPanel);
